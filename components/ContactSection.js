"use client";
import { useLanguage } from './LanguageContext';

export default function ContactSection() {
  const { language } = useLanguage();

  const socialLinks = {
    ar: [
      { name: 'Instagram', icon: '📸', link: 'https://www.instagram.com/kareemdahboul?igsh=bzBmenc5c2M4NWdh', color: '#E4405F' },
      { name: 'Facebook', icon: '📘', link: 'https://www.facebook.com/share/1DyGw6yQG9/', color: '#1877F2' },
      { name: 'Email', icon: '📧', link: 'mailto:teacher@english.com', color: '#EA4335' },
      { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/0935524819', color: '#25D366' }
    ],
    en: [
      { name: 'Instagram', icon: '📸', link: 'https://www.instagram.com/kareemdahboul?igsh=bzBmenc5c2M4NWdh', color: '#E4405F' },
      { name: 'Facebook', icon: '📘', link: 'https://www.facebook.com/share/1DyGw6yQG9/', color: '#1877F2' },
      { name: 'Email', icon: '📧', link: 'mailto:teacher@english.com', color: '#EA4335' },
      { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/0935524819', color: '#25D366' }
    ]
  };

  const links = socialLinks[language];

  return (
    <section id="contact">
      <div className="container">
        <h2>{language === 'ar' ? 'تواصل معي' : 'Connect With Me'}</h2>
        <div className="social-section">
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            {language === 'ar' 
              ? 'تابعني على وسائل التواصل الاجتماعي للاطلاع على آخر التحديثات' 
              : 'Follow me on social media for latest updates'}
          </p>
          <div className="social-grid">
            {links.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="social-icon">{social.icon}</div>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}