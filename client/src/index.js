import React from 'react';
import ReactDOM from 'react-dom';  // burası değişti
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // createRoot yerine burası
);

// Performans ölçümü için
reportWebVitals();

