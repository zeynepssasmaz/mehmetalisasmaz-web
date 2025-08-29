// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const app = express();

// Log middleware (istekleri görmek için)
app.use((req, res, next) => {
  console.log(`Yeni istek: ${req.method} ${req.url}`);
  next();
});

// CORS ayarları
const corsOptions = {
  origin: ['http://localhost:3000', 'https://mehmetalisasmaz.com', 'https://www.mehmetalisasmaz.com'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(compression());


const buildingRoutes = require('./routes/buildings');
app.use('/api/buildings', buildingRoutes);

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB bağlantısı başarılı'))
  .catch(err => console.error('❌ MongoDB bağlantı hatası:', err));

// Test route
app.get('/', (req, res) => {
  res.send('API Çalışıyor 🚀');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor`);
});

