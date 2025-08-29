const express = require('express');
const router = express.Router();
const Building = require('../models/Building');
const upload = require('../utils/multer'); // multer + cloudinary ayarlı
const slugify = require('slugify');

/**
 * 1) Tüm apartmanları getir
 */
router.get('/', async (req, res) => {
  try {
    const buildings = await Building.find().lean();
    res.json(buildings);
  } catch (err) {
    console.error('Buildings fetch error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * 2) Önizlemeler (sayfalı)
 */
router.get('/previews', async (req, res) => {
  try {
    const page = parseInt(req.query.page || '1', 10);
    const limit = parseInt(req.query.limit || '8', 10);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Building.find({}, { apartman: 1, slug: 1, gorseller: { $slice: 1 } })
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Building.estimatedDocumentCount()
    ]);

    const mapped = items.map(b => ({
      apartman: b.apartman,
      slug: b.slug,
      cover: (b.gorseller && b.gorseller[0]) || '/placeholder.jpg'
    }));

    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');

    res.json({
      items: mapped,
      page,
      total,
      hasMore: skip + limit < total
    });
  } catch (err) {
    console.error('Previews error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * 3) Tek apartman detay (slug ile)
 */
router.get('/:slug', async (req, res) => {
  try {
    const building = await Building.findOne({ slug: req.params.slug }).lean();
    if (!building) {
      return res.status(404).json({ message: 'Apartman bulunamadı' });
    }
    res.json(building);
  } catch (err) {
    console.error('Building detail error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * 4) Upload (apartman + görseller)
 */
router.post('/upload', upload.array('gorseller', 10), async (req, res) => {
  try {
    const { apartman } = req.body;
    if (!apartman) {
      return res.status(400).json({ error: 'Apartman adı gerekli' });
    }
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'En az bir görsel yüklemelisiniz' });
    }

    const gorseller = req.files.map(file => file.path);

    // slug oluşturma
    const slug = slugify(apartman, { lower: true, strict: true });

    const newBuilding = new Building({ apartman, slug, gorseller });
    await newBuilding.save();

    res.status(201).json(newBuilding);
  } catch (err) {
    console.error('Bina yükleme hatası:', err);
    res.status(400).json({ error: err.message });
  }
});

/**
 * 5) Silme
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Building.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Apartman bulunamadı' });
    }
    res.json({ message: 'Apartman silindi' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

