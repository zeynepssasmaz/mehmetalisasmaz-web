import React from 'react';
import './Faq.css';

const faqs = [
  {
    soru: "Kat karşılığı inşaat nedir?",
    cevap: "Kat karşılığı inşaat, arsa sahibinin arsasını müteahhide vermesi ve karşılığında belirli sayıda bağımsız bölüm (daire, dükkan vb.) alması esasına dayanır. Arsa sahibi maliyet yüklenmez, inşaat süreci müteahhit tarafından yürütülür."
  },
  {
    soru: "Kentsel dönüşüm kapsamında evimi yeniletebilir miyim?",
    cevap: "Evet. Binanız riskli yapı raporu alırsa, 6306 sayılı yasa kapsamında kentsel dönüşüme girer ve devletin sunduğu teşviklerden yararlanabilirsiniz. Firmamız bu süreçte proje ve uygulama desteği verir."
  },
  {
    soru: "Proje teslim süresi ne kadar sürer?",
    cevap: "Proje türüne göre değişir. Konut projeleri genellikle 12-24 ay arası sürerken, ticari projeler veya sanayi yapılarında süre proje büyüklüğüne göre değişir."
  },
  {
    soru: "İnşaat maliyetleri nasıl hesaplanır?",
    cevap: "İnşaat maliyetleri; kullanılacak malzeme kalitesi, proje büyüklüğü, işçilik giderleri, proje yeri ve teknik detaylara bağlı olarak hesaplanır. Ücretsiz keşif hizmetimizle net bir maliyet çıkarabiliriz."
  },
  {
    soru: "Kat karşılığı oranları nasıl belirlenir?",
    cevap: "Kat karşılığı oranı; arsanın konumu, büyüklüğü, imar durumu ve projenin ekonomik değerine göre belirlenir. Firma olarak arsa sahiplerine en avantajlı oranı sunmaya çalışıyoruz."
  },
  {
    soru: "Firma olarak hangi tür yapılar inşa ediyorsunuz?",
    cevap: "Konut, ticari yapılar, sanayi tesisleri, kamu projeleri ve kentsel dönüşüm kapsamında çeşitli yapıların inşaatını üstleniyoruz."
  },
  {
    soru: "Proje sürecinde benimle kim ilgilenecek?",
    cevap: "Firmamızda her projeye özel bir proje yöneticisi atanır. Süreç boyunca size tek bir muhatap kişi yardımcı olur ve bilgi verir."
  },
  {
    soru: "Anahtar teslim inşaat ne demek?",
    cevap: "Anahtar teslim inşaat; proje çiziminden ruhsat alımına, kaba ve ince inşaattan tesisatlara kadar tüm sürecin firma tarafından yürütülmesi ve bitmiş halde teslim edilmesidir."
  },
  {
    soru: "İnşaat sürecinde güvenlik nasıl sağlanıyor?",
    cevap: "Şantiyelerimizde iş sağlığı ve güvenliği yönetmeliklerine tam uyum sağlanır, tüm çalışanlarımız gerekli güvenlik eğitimlerinden geçirilir."
  },
  {
    soru: "Projeleriniz garanti kapsamında mı?",
    cevap: "Evet. Teslim edilen tüm projelerimiz belirli bir süre garanti kapsamındadır. Bu süreçte oluşabilecek yapısal veya teknik sorunlarda firmamız ücretsiz destek sağlar."
  },
  {
    soru: "Mimari tasarım sürecine ben de dahil olabilir miyim?",
    cevap: "Elbette. İsteklerinizi ve ihtiyaçlarınızı dikkate alarak mimari tasarım sürecini sizinle birlikte yürütüyoruz."
  },
  {
    soru: "Yatırım amaçlı arsa veya konut projeleri yapıyor musunuz?",
    cevap: "Evet. Yatırımcılara yönelik konut, ticari alan ve karma proje çözümleri geliştiriyoruz."
  },
  {
    soru: "Kentsel dönüşümde kira yardımı alabilir miyim?",
    cevap: "Evet. Riskli yapı raporu aldıktan sonra Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından belirlenen kira yardımlarından yararlanabilirsiniz."
  },
  {
    soru: "Projelerinizde enerji verimliliğine dikkat ediyor musunuz?",
    cevap: "Kesinlikle. Tüm projelerimizde enerji verimli malzemeler, yalıtım sistemleri ve sürdürülebilir çözümler kullanıyoruz."
  },
  {
    soru: "Arsam var, sizinle nasıl çalışabilirim?",
    cevap: "Arsanızın imar durumuna göre ücretsiz ön değerlendirme yapıyoruz. Sonrasında sizin için en avantajlı kat karşılığı veya satış opsiyonunu sunuyoruz."
  }
];

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">SIK SORULAN SORULAR</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>{faq.soru}</summary>
            <p>{faq.cevap}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;

