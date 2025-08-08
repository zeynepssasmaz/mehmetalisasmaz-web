const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');

// Tüm SSS'leri getir
router.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find();
    .sort({ createdAt: -1 }) // Yeni eklenenler önce gelsin
    .lean(); // Mongoose dokümanını düz objeye çevir, daha hızlı
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yeni SSS ekle
router.post('/', async (req, res) => {
  try {
    const newFaq = new Faq({
      soru: req.body.soru,
      cevap: req.body.cevap
    });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// SSS sil
router.delete('/:id', async (req, res) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.json({ message: 'Silindi' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

