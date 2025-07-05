import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mehmet Ali Şaşmaz</div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Anasayfa</Link></li>
        <li><Link to="/neden-biz" onClick={closeMenu}>Neden Biz</Link></li>
        <li><Link to="/hizmetler" onClick={closeMenu}>Hizmetler</Link></li>
        <li><Link to="/galeri" onClick={closeMenu}>Galeri</Link></li>
        <li><Link to="/sss" onClick={closeMenu}>SSS</Link></li>
        <li><Link to="/iletisim" onClick={closeMenu}>İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

