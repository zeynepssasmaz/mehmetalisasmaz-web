import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Faq.css';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/faq`); 
        setFaqs(res.data);
      } catch (err) {
        console.error('SSS verileri alınamadı:', err);
      }
    };

    fetchFaqs();
  }, []);

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
