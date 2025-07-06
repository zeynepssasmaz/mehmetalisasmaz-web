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
      <section id="home" className="home-section home-logo-section">
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Firma Logosu" className="logo" />
        </div>
      </section>

      <section id="about" className="home-section">
        <About />
      </section>

      <section id="services" className="home-section">
        <Services />
      </section>

      <section id="gallery" className="home-section">
        <Gallery />
      </section>

      <section id="faq" className="home-section light-section">
        <Faq />
      </section>

      <section id="contact" className="home-section light-section">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

