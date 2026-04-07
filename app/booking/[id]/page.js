"use client";

import Link from 'next/link';
import { use } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { coursesData } from '@/lib/coursesData';

export default function BookingPage({ params }) {
  const { language, t } = useLanguage();
  const resolvedParams = use(params);
  const courseId = Number(resolvedParams.id);
  const course = (coursesData[language] || coursesData.ar).find((item) => item.id === courseId);
  const whatsappNumber = '963939196057';

  if (!course) {
    return (
      <section className="booking-page">
        <div className="container">
          <h2>{t('courseNotFound')}</h2>
          <p>{t('courseNotFoundMessage')}</p>
          <Link href="/" className="back-link">{t('backToCourses')}</Link>
        </div>
      </section>
    );
  }

  const message = language === 'ar'
    ? `مرحباً، أود حجز الكورس التالي: ${course.name} (${course.price}).` 
    : `Hello, I would like to book the following course: ${course.name} (${course.price}).`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="booking-page">
      <div className="container">
        <h2>{t('courseBooking')}</h2>
        <div className="booking-card">
          <img src={course.image} alt={course.name} className="booking-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/900x400/4E8EA2/FFFFFF?text=Course+Booking'; }} />
          <div className="booking-content">
            <h3>{course.name}</h3>
            <p className="booking-desc">{course.desc}</p>
            <div className="booking-meta">
              <div className="booking-meta-item">
                <strong>{t('price')}:</strong> {course.price}
              </div>
              <div className="booking-meta-item">
                <strong>{t('startsOn')}:</strong> {course.startDate}
              </div>
              <div className="booking-meta-item">
                <strong>{t('endsOn')}:</strong> {course.endDate}
              </div>
              <div className="booking-meta-item">
                <strong>{t('totalHours')}:</strong> {course.hours}
              </div>
              <div className="booking-meta-item">
                <strong>{t('certificate')}:</strong> {course.certificate}
              </div>
              <div className="booking-meta-item">
                <strong>{t('institute')}:</strong> {course.institute}
              </div>
            </div>
            <div className="booking-actions">
              <Link href={whatsappLink} target="_blank" className="book-now-btn">
                {t('bookNow')}
              </Link>
              <Link href="/" className="back-link">{t('backToCourses')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
