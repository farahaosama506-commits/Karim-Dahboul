// components/Navbar.js - تأكد من وجود z-index أعلى من السلايدر
"use client";
import { useLanguage } from './LanguageContext';
import { useState } from 'react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#courses', labelAr: 'الكورسات', labelEn: 'Courses' },
    { href: '#online', labelAr: 'الحصص الأونلاين', labelEn: 'Online' },
    { href: '#contact', labelAr: 'تواصل', labelEn: 'Contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ zIndex: 1000 }}>
      <div className="container">
        <div className="logo">Karim<span>Dahboul</span></div>
        
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
                {language === 'ar' ? item.labelAr : item.labelEn}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={toggleLanguage} className="lang-btn">
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
          <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </div>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navItems.map(item => (
          <a key={item.href} href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
            {language === 'ar' ? item.labelAr : item.labelEn}
          </a>
        ))}
      </div>
    </nav>
  );
}