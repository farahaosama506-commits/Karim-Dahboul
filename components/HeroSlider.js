// components/HeroSlider.js
"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const slides = [
  {
    image: '/images/slider/student1.jpg',
    titleAr: 'تعلم اللغة الإنجليزية',
    titleEn: 'Learn English',
    subtitleAr: 'مع أفضل المعلمين - كورسات وحصص أونلاين',
    subtitleEn: 'With the best teachers - Courses & Online Sessions'
  },
  {
    image: '/images/slider/student2.jpg',
    titleAr: 'تطوير مهارات المحادثة',
    titleEn: 'Develop Conversation Skills',
    subtitleAr: 'تحدث بطلاقة وثقة في أي وقت',
    subtitleEn: 'Speak fluently and confidently anytime'
  },
  {
    image: '/images/slider/student3.jpg',
    titleAr: 'كورسات معتمدة',
    titleEn: 'Certified Courses',
    subtitleAr: 'احصل على شهادات معتمدة دولياً',
    subtitleEn: 'Get internationally recognized certificates'
  },
  {
    image: '/images/slider/student4.jpg',
    titleAr: 'تعلم مع الخبراء',
    titleEn: 'Learn with Experts',
    subtitleAr: 'أفضل المعلمين بخبرات عالمية',
    subtitleEn: 'Best teachers with global experience'
  }
];

export default function HeroSlider() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="hero-slider">
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <Image
              src={slide.image}
              alt={language === 'ar' ? slide.titleAr : slide.titleEn}
              className="hero-slide-image"
              fill
              sizes="100vw"
              priority={index === 0}
              style={{ objectFit: 'cover' }}
            />
            <div className="hero-slide-overlay">
              <div className="hero-content">
                <h1 className="hero-title animate-fadeInUp">
                  {language === 'ar' ? slide.titleAr : slide.titleEn}
                </h1>
                <p className="hero-subtitle animate-fadeInUp delay-1">
                  {language === 'ar' ? slide.subtitleAr : slide.subtitleEn}
                </p>
                <button 
                  className="hero-btn animate-fadeInUp delay-2"
                  onClick={scrollToCourses}
                >
                  {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* أزرار التنقل */}
        <button className="hero-slider-btn prev" onClick={goToPrevious}>
          ❮
        </button>
        <button className="hero-slider-btn next" onClick={goToNext}>
          ❯
        </button>

        {/* نقاط التنقل */}
        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}