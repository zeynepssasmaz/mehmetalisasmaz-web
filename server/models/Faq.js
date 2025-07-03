const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  soru: { type: String, required: true },
  cevap: { type: String, required: true }
});

module.exports = mongoose.model('Faq', faqSchema);
