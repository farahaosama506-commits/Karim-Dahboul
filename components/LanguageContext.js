// components/LanguageContext.js - تأكد من وجوده
"use client";
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    heroTitle: 'تعلم اللغة الإنجليزية',
    heroSubtitle: 'مع أفضل المعلمين - كورسات وحصص أونلاين',
    startNow: 'ابدأ الآن',
    courses: 'الكورسات المتوفرة',
    online: 'الحصص الأونلاين',
    contact: 'تواصل معي',
    bookSeat: 'احجز مقعد',
    price: 'السعر',
    whatsapp: 'تواصل عبر واتساب',
    sessionInfo: 'جلسات أونلاين عبر Zoom/Google Meet',
    name: 'الاسم',
    phone: 'رقم الجوال',
    course: 'اختر الكورس',
    confirm: 'تأكيد الحجز',
    cancel: 'إلغاء',
    courseBooking: 'حجز الكورس',
    startsOn: 'تاريخ البداية',
    endsOn: 'تاريخ الانتهاء',
    totalHours: 'عدد الساعات',
    certificate: 'الشهادة',
    institute: 'المعهد المانح',
    bookNow: 'احجز الآن',
    backToCourses: 'العودة للكورسات',
    courseNotFound: 'الكورس غير موجود',
    courseNotFoundMessage: 'الرجاء العودة إلى صفحة الكورسات واختيار كورس صالح.',
    footer: 'جميع الحقوق محفوظة'
  },
  en: {
    heroTitle: 'Learn English',
    heroSubtitle: 'With the best teachers - Courses & Online Sessions',
    startNow: 'Start Now',
    courses: 'Available Courses',
    online: 'Online Sessions',
    contact: 'Connect With Me',
    bookSeat: 'Book a Seat',
    price: 'Price',
    whatsapp: 'Contact via WhatsApp',
    sessionInfo: 'Online sessions via Zoom/Google Meet',
    name: 'Name',
    phone: 'Phone Number',
    course: 'Select Course',
    confirm: 'Confirm Booking',
    cancel: 'Cancel',
    courseBooking: 'Course Booking',
    startsOn: 'Starts On',
    endsOn: 'Ends On',
    totalHours: 'Total Hours',
    certificate: 'Certificate',
    institute: 'Institute',
    bookNow: 'Book Now',
    backToCourses: 'Back to Courses',
    courseNotFound: 'Course Not Found',
    courseNotFoundMessage: 'Please go back to the courses page and choose a valid course.',
    footer: 'All Rights Reserved'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
