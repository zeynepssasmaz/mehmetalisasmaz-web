import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetails from './pages/ProjectDetails';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/neden-biz" element={<About />} />
  <Route path="/hizmetler" element={<Services />} />
  <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
  <Route path="/galeri" element={<Gallery />} />
  <Route path="/sss" element={<Faq />} />
  <Route path="/iletisim" element={<Contact />} />
  <Route path="/galeri/:slug" element={<ProjectDetails />} />
</Routes>

    </Router>
  );
}

export default App;

