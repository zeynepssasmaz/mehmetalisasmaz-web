import './Home.css';
import React from 'react';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Faq from './Faq';
import Contact from './Contact';

function Home() {
  return (
    <div className="home-page">
      <section id="home" className="home-logo-section">
        <div className="home-container">
          {/* Firma Logosu */}
          <img src="/logo.png" alt="Firma Logosu" className="logo" />

          {/* CTA Butonları */}
          <div className="cta-buttons">
            <a href="tel:+905323071998" className="cta-btn">📞 Hemen Ara</a>
            <a href="https://wa.me/905323071998" target="_blank" rel="noreferrer" className="cta-btn">💬 WhatsApp</a>
            <a href="#contact" className="cta-btn">✉️ İletişime Geç</a>
          </div>
        </div>
      </section>

      <section id="about" className="page-section">
        <About />
      </section>

      <section id="services" className="page-section">
        <Services />
      </section>

      <section id="gallery" className="page-section">
        <Gallery />
      </section>

      <section id="faq" className="page-section">
        <Faq />
      </section>

      <section id="contact" className="page-section">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

