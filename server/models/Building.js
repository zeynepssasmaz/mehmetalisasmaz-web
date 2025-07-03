const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  apartman: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  gorseller: [String]
});

module.exports = mongoose.model('Building', buildingSchema);

