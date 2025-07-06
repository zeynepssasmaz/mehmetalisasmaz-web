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
          <img src="/logo.png" alt="Firma Logosu" className="logo" />
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

