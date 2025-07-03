import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mehmet Ali Şaşmaz</div>
      <ul className="navbar-links">
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/neden-biz">Neden Biz</Link></li>
        <li><Link to="/hizmetler">Hizmetler</Link></li>
        <li><Link to="/galeri">Galeri</Link></li>
        <li><Link to="/sss">SSS</Link></li>
        <li><Link to="/iletisim">İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

