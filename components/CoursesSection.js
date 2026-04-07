// components/CoursesSection.js
"use client";
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { coursesData } from '@/lib/coursesData';

export default function CoursesSection() {
  const { language, t } = useLanguage();
  const currentCourses = coursesData[language] || coursesData.ar;

  return (
    <section id="courses">
      <div className="container">
        <h2>{t('courses')}</h2>
        <div className="courses-grid">
          {currentCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                className="course-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/4E8EA2/FFFFFF?text=English+Course';
                }}
              />
              <h3>{course.name}</h3>
              <div className="course-price">{t('price')}: {course.price}</div>
              <p className="course-desc">{course.desc}</p>
              <Link href={`/booking/${course.id}`} className="btn-course">
                {t('bookSeat')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
