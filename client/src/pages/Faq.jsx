import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Faq.css';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/faq`,
          { headers: { 'Cache-Control': 'no-cache' } }
        );
        setFaqs(res.data);
      } catch (err) {
        console.error('SSS verileri alınamadı:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <div className="faq-loading">
        <div className="spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="faq-container">
      <h2 className="faq-title">SIK SORULAN SORULAR</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>{faq.soru}</summary>
            <p>{faq.cevap}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;

