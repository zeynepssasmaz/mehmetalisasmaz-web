import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
      return alert("Lütfen tüm alanları doldurun.");
    }

    emailjs.sendForm('sasmaz_insaat', 'sasmaz_insaat', form.current, '-Ku7TlfFeXL7GwTXO')
      .then(() => {
        alert('Mesaj başarıyla gönderildi!');
        form.current.reset();
      }, (error) => {
        alert('Hata oluştu:', error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Bizimle İletişime Geçin</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Adınız" required />
          <input type="email" name="email" placeholder="E-posta Adresiniz" required />
          <textarea name="message" rows="5" placeholder="Mesajınız" required />
          <button type="submit">Gönder</button>
        </form>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps?q=Ambarlı+Mahallesi+Boyacı+Sokak+No:2/2+Avcılar+İstanbul&output=embed"
          frameBorder="0"
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

