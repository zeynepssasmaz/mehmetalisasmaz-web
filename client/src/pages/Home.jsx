import './Home.css';
import React from 'react';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Faq from './Faq';
import Contact from './Contact';
import optimizeImage from '../optimizeImage';

function Home() {
  // Örnek proje görseli URL’si - gerçekte API’den gelen veri kullanılacak
  const sampleImage = "https://res.cloudinary.com/demo/image/upload/v12345/proje.jpg";

  return (
    <div className="home-page">
      <section id="home" className="home-logo-section">
        <div className="home-container">
          {/* Firma Logosu - Lazy Loading gereksiz burada */}
          <img src="/logo.png" alt="Firma Logosu" className="logo" />

          {/* Örnek optimize edilmiş proje görseli */}
          <img
            src={optimizeImage(sampleImage)}
            alt="Proje"
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
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

      <section id="faq" className="page-section page-section-light">
        <Faq />
      </section>

      <section id="contact" className="page-section page-section-light">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

