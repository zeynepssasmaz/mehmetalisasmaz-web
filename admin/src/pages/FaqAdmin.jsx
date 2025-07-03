import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FaqAdmin.css';  // İstersen CSS ekle

const FaqAdmin = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editId, setEditId] = useState(null);

  // SSS listesini getir
  const fetchFaqs = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/faq');
      setFaqs(res.data);
    } catch (err) {
      console.error('SSS verileri alınamadı:', err);
      alert('SSS verileri alınamadı!');
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  // Ekle / Güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim() || !answer.trim()) {
      alert('Soru ve cevap boş olamaz!');
      return;
    }

    try {
      if (editId) {
        // Güncelle
        await axios.put(`http://localhost:3001/api/faq/${editId}`, {
          soru: question,
          cevap: answer,
        });
      } else {
        // Yeni ekle
        await axios.post('http://localhost:3001/api/faq', {
          soru: question,
          cevap: answer,
        });
      }

      setQuestion('');
      setAnswer('');
      setEditId(null);
      fetchFaqs();
    } catch (err) {
      console.error('SSS ekleme/güncelleme hatası:', err.response || err.message);
      alert('Bir hata oluştu!');
    }
  };

  // Sil
  const handleDelete = async (id) => {
    if (!window.confirm('Bu soruyu silmek istediğinizden emin misiniz?')) return;
    try {
      await axios.delete(`/api/faq/${id}`);
      fetchFaqs();
    } catch (err) {
      console.error('SSS silme hatası:', err.response || err.message);
      alert('Silme işleminde hata oluştu!');
    }
  };

  // Düzenle için formu doldur
  const handleEdit = (faq) => {
    setQuestion(faq.soru);
    setAnswer(faq.cevap);
    setEditId(faq._id);
  };

  return (
    <div className="faq-admin">
      <h2>SSS Yönetimi</h2>

      <form onSubmit={handleSubmit} className="faq-form">
        <input
          type="text"
          placeholder="Soru"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <textarea
          placeholder="Cevap"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Güncelle' : 'Ekle'}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setQuestion('');
              setAnswer('');
              setEditId(null);
            }}
          >
            İptal
          </button>
        )}
      </form>

      <ul className="faq-list">
        {faqs.length === 0 && <li>Henüz soru yok.</li>}
        {faqs.map((faq) => (
          <li key={faq._id} className="faq-item">
            <strong>{faq.soru}</strong>
            <p>{faq.cevap}</p>
            <button onClick={() => handleEdit(faq)}>Düzenle</button>
            <button onClick={() => handleDelete(faq._id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqAdmin;

