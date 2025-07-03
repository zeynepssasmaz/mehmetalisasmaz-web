import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const services = [
  {
    slug: 'insaat-taahhut',
    title: 'İnşaat Taahhüt',
    image: '/images/services/insaat-taahhut.jpg'
  },
  {
    slug: 'konut-uretimi',
    title: 'Konut Üretimi ve Satışı',
    image: '/images/services/konut-uretimi.jpg'
  },
  {
    slug: 'kentsel-donusum',
    title: 'Kentsel Dönüşüm',
    image: '/images/services/kentsel-donusum.jpg'
  },
  {
    slug: 'ticari-projeler',
    title: 'Ticari Projeler',
    image: '/images/services/ticari-projeler.jpg'
  },
  {
    slug: 'sanayi-yapilari',
    title: 'Sanayi Yapıları',
    image: '/images/services/sanayi-yapilari.jpg'
  },
  {
    slug: 'kamu-isleri',
    title: 'Kamu İşleri',
    image: '/images/services/kamu-isleri.jpg'
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">Hizmetlerimiz</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link
            to={`/hizmetler/${service.slug}`}
            className="service-card"
            key={index}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-title">{service.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;

