// components/Hero.js
"use client";
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>{t('heroTitle')}</h1>
        <p className="subtitle">{t('heroSubtitle')}</p>
        <button className="btn-primary" onClick={scrollToCourses}>
          {t('startNow')}
        </button>
      </div>
    </section>
  );
}