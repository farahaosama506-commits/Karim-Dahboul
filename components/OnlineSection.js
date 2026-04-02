// components/OnlineSection.js
"use client";
import { useLanguage } from './LanguageContext';

export default function OnlineSection() {
  const { t, language } = useLanguage();

  const whatsappNumber = "0935524819"; // غير الرقم حسب رغبتك
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="online">
      <div className="container">
        <h2>{t('online')}</h2>
        <div className="online-content">
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            📅 {language === 'ar' ? 'جلسات أونلاين عبر Zoom - ساعات مرنة' : 'Online sessions via Zoom - Flexible hours'}
          </p>
          <p style={{ marginBottom: '1rem' }}>{t('sessionInfo')}</p>
          <a href={whatsappLink} target="_blank" className="whatsapp-link" rel="noopener noreferrer">
            📱 {t('whatsapp')}
          </a>
          <div className="online-info">
            <p>⏰ {language === 'ar' ? 'الأحد - الخميس: 4م - 10م' : 'Sun - Thu: 4PM - 10PM'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}