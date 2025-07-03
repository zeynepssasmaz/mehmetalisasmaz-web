// checkBuildings.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/insaat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB bağlantısı başarılı");

  const Building = mongoose.model('Building', new mongoose.Schema({
    mahalle: String,
    apartmanAdi: String,
    disGorsel: [String],
    icGorsel: [String]
  }), 'buildings'); // 👈 koleksiyon adı burada önemli

  Building.find().then(data => {
    console.log(JSON.stringify(data, null, 2));
    process.exit();
  });
}).catch(err => {
  console.error("MongoDB bağlantı hatası:", err);
});

