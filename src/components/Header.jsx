import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const loc = useLocation();
  
  return (
    <header>
      <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Використовуємо зображення логотипу */}
        <img src={logo} alt="TechNova Logo" style={{ height: '50px', width: 'auto' }} />
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold', color: '#00bcd4' }}>TechNova</div>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={loc.pathname==='/'?'active':''}>Головна</Link></li>
          <li><Link to="/projects" className={loc.pathname==='/projects'?'active':''}>Проєкти</Link></li>
          <li><Link to="/feedback" className={loc.pathname==='/feedback'?'active':''}>Зворотній зв'язок</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;