const express = require('express');
const router = express.Router();
const Building = require('../models/Building');
const upload = require('../utils/multer'); // multer + cloudinary ayarlı

// Tüm apartmanları getir
router.get('/', async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Apartman ve görselleri yükle
router.post('/upload', upload.array('gorseller', 10), async (req, res) => {
  try {
    const { apartman } = req.body;

    if (!apartman) {
      return res.status(400).json({ error: 'Apartman adı gerekli' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'En az bir görsel yüklemelisiniz' });
    }

    // Cloudinary'den gelen URL'leri al
    const gorseller = req.files.map(file => file.path);

    // Basit slug oluşturma
    const slug = apartman.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

    const newBuilding = new Building({ apartman, slug, gorseller });
    await newBuilding.save();

    res.status(201).json(newBuilding);
  } catch (err) {
    console.error('Bina yükleme hatası:', err);
    res.status(400).json({ error: err.message });
  }
});

// Apartman silme
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Building.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Apartman bulunamadı' });
    }
    res.json({ message: 'Apartman silindi' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

