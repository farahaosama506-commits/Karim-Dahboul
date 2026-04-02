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