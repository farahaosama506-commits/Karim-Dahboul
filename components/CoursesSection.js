// components/CoursesSection.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { coursesData } from '@/lib/coursesData';

export default function CoursesSection() {
  const { language, t } = useLanguage();
  const currentCourses = coursesData[language] || coursesData.ar;
  const groupCourse = currentCourses.find((course) => course.levels);
  const otherCourses = currentCourses.filter((course) => !course.levels);

  return (
    <section id="courses">
      <div className="container">
        <h2>{t('courses')}</h2>
        <div className="courses-grid">
          {groupCourse && (
            <div className="course-card course-group-card">
              <Image
                src={groupCourse.image}
                alt={groupCourse.name}
                className="course-image"
                width={420}
                height={240}
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <h3>{groupCourse.name}</h3>
              <p className="course-desc">{groupCourse.desc}</p>
              <Link href={`/booking/${groupCourse.id}`} className="btn-course">
                {t('bookSeat')}
              </Link>
            </div>
          )}

          {otherCourses.map((course) => (
            <div key={course.id} className="course-card">
              <Image
                src={course.image}
                alt={course.name}
                className="course-image"
                width={420}
                height={240}
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <h3>{course.name}</h3>
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
