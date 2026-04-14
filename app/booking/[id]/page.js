"use client";

import Image from 'next/image';
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
    ? `مرحباً، أود حجز الكورس التالي: ${course.name}.`
    : `Hello, I would like to book the following course: ${course.name}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const isGroupCourse = Array.isArray(course.levels);

  return (
    <section className="booking-page">
      <div className="container">
        <h2>{t('courseBooking')}</h2>
        <div className="booking-card">
          <div className="booking-image-wrapper" style={{ position: 'relative', width: '100%', height: '450px' }}>
            <Image
              src={course.image}
              alt={course.name}
              className="booking-image"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', borderRadius: '24px' }}
            />
          </div>
          <div className="booking-content">
            <h3>{course.name}</h3>
            <p className="booking-desc">{course.desc}</p>
            <div className="booking-meta">
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
            {isGroupCourse ? (
              <div className="course-levels-list">
                {(course.levels || []).map((level) => {
                  const levelMessage = language === 'ar'
                    ? `مرحباً، أود حجز ${level.name} من ${course.name}.`
                    : `Hello, I would like to book ${level.name} from ${course.name}.`;
                  const levelLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(levelMessage)}`;

                  return (
                    <div key={level.name} className="course-level-item">
                      <h4>{level.name}</h4>
                      <p>{level.desc}</p>
                      <p><strong>{t('totalHours')}:</strong> {level.hours}</p>
                      <Link href={levelLink} target="_blank" className="book-now-btn btn-level">
                        {t('bookNow')}
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="booking-actions">
                <Link href={whatsappLink} target="_blank" className="book-now-btn">
                  {t('bookNow')}
                </Link>
              </div>
            )}
            <div className="booking-actions">
              <Link href="/" className="back-link">{t('backToCourses')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
