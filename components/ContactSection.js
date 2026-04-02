"use client";
import { useLanguage } from './LanguageContext';

export default function ContactSection() {
  const { language } = useLanguage();

  const socialLinks = {
    ar: [
      { name: 'Instagram', icon: '📸', link: 'https://instagram.com/english.teacher', color: '#E4405F' },
      { name: 'Facebook', icon: '📘', link: 'https://facebook.com/englishteacher', color: '#1877F2' },
      { name: 'Email', icon: '📧', link: 'mailto:teacher@english.com', color: '#EA4335' },
      { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/966500000000', color: '#25D366' }
    ],
    en: [
      { name: 'Instagram', icon: '📸', link: 'https://instagram.com/english.teacher', color: '#E4405F' },
      { name: 'Facebook', icon: '📘', link: 'https://facebook.com/englishteacher', color: '#1877F2' },
      { name: 'Email', icon: '📧', link: 'mailto:teacher@english.com', color: '#EA4335' },
      { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/966500000000', color: '#25D366' }
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