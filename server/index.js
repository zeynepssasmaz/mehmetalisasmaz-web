// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// EN ÜSTE log middleware
app.use((req, res, next) => {
  console.log(`Yeni istek: ${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: ['https://mehmetalisasmaz.com', 'https://www.mehmetalisasmaz.com'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());

// Routes
const faqRouter = require('./routes/Faq');
app.use('/api/faq', faqRouter);

const buildingRoutes = require('./routes/buildings');
app.use('/api/buildings', buildingRoutes);

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Test route
app.get('/', (req, res) => {
  res.send('API Çalışıyor');
});

// Server listen
app.listen(process.env.PORT, () => {
  console.log(`Sunucu ${process.env.PORT} portunda çalışıyor`);
});

