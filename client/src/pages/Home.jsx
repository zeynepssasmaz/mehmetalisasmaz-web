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
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Firma Logosu" className="logo" />
        </div>
      </section>

      <section id="about" style={{ minHeight: '100vh' }}>
        <About />
      </section>

      <section id="services" style={{ minHeight: '100vh' }}>
        <Services />
      </section>

      <section id="gallery" style={{ minHeight: '100vh' }}>
        <Gallery />
      </section>

      <section id="faq" style={{ minHeight: '100vh',backgroundColor: '#fff' }}>
        <Faq />
      </section>

      <section id="contact" style={{ minHeight: '100vh',backgroundColor: '#fff' }}>
        <Contact />
      </section>
    </div>
  );
}

export default Home;

