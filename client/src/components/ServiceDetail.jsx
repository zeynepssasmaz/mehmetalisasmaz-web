import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const serviceData = {
  'insaat-taahhut': {
    title: 'İnşaat Taahhüt',
    description:
      'Projelerin satın alma veya kat karşılığı modeliyle geliştirilmesi, ruhsatlandırılması, inşa edilmesi ve anahtar teslim olarak teslim edilmesini kapsar.',
    image: '/images/services/insaat-taahhut.jpg',
  },
  'konut-uretimi': {
    title: 'Konut Üretimi ve Satışı',
    description:
      'Modern yaşam alanları inşa ediyor, yüksek kalite standartlarında konut üretimi ve satış süreçlerini yönetiyoruz.',
    image: '/images/services/konut-uretimi.jpg',
  },
  'kentsel-donusum': {
    title: 'Kentsel Dönüşüm',
    description:
      '6306 sayılı yasa kapsamında riskli yapıları analiz edip, güvenli ve modern yapılara dönüştürüyoruz.',
    image: '/images/services/kentsel-donusum.jpg',
  },
  'ticari-projeler': {
    title: 'Ticari Projeler',
    description:
      'Oteller, hastaneler, AVM’ler ve iş merkezleri gibi ticari alanlarda anahtar teslim projeler geliştiriyoruz.',
    image: '/images/services/ticari-projeler.jpg',
  },
  'sanayi-yapilari': {
    title: 'Sanayi Yapıları',
    description:
      'Fabrika, üretim tesisleri ve lojistik merkezleri gibi sanayi alanlarında güçlü ve dayanıklı çözümler sunuyoruz.',
    image: '/images/services/sanayi-yapilari.jpg',
  },
  'kamu-isleri': {
    title: 'Kamu İşleri',
    description:
      'Devlet kurumlarına ait altyapı ve üstyapı projelerinde sorumluluk alıyor, kamuya hizmet ediyoruz.',
    image: '/images/services/kamu-isleri.jpg',
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="service-detail">
        <h2>Hizmet Bulunamadı</h2>
        <Link to="/" className="back-button">
          Hizmetlerimiz Sayfasına Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <img src={service.image} alt={service.title} />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <Link to="/" className="back-button">
        Hizmetlerimiz Sayfasına Dön
      </Link>
    </div>
  );
};

export default ServiceDetail;

