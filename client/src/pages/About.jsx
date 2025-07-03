import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Hammer, Clock, Smile } from 'lucide-react';

const nedenler = [
  {
    icon: <ShieldCheck size={28} color="#D4AF37" />,
    title: "Güvenilirlik",
    desc: "Söz verdiğimiz zamanda, eksiksiz teslim."
  },
  {
    icon: <Hammer size={28} color="#D4AF37" />,
    title: "Kaliteli İşçilik",
    desc: "Birinci sınıf malzeme ve ustalık."
  },
  {
    icon: <Clock size={28} color="#D4AF37" />,
    title: "25+ Yıllık Tecrübe",
    desc: "İnşaattan mimariye her adımda uzmanlık."
  },
  {
    icon: <Smile size={28} color="#D4AF37" />,
    title: "Müşteri Memnuniyeti",
    desc: "Her proje sonrası memnun müşteriler."
  }
];

function About() {
  return (
    <div className="about-section fancy-bg">
      <div className="about-wrapper">
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Neden Bizi Tercih Etmelisiniz?
        </motion.h2>
        
        <motion.p 
          className="about-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Mehmet Ali Şaşmaz İnşaat, güvenilirliği ve kaliteyi aynı çatı altında sunar.
        </motion.p>

        <div className="timeline-grid">
          {nedenler.map((item, i) => (
            <motion.div 
              key={i} 
              className="timeline-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

