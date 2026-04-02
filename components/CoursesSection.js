// components/CoursesSection.js - النسخة النهائية المصححة بالكامل
"use client";
import { useLanguage } from './LanguageContext';
import { useState } from 'react';

const coursesData = {
  ar: [
    { 
      id: 1, 
      name: 'محادثة إنجليزية', 
      price: '3000 عملة سورية جديدة  ', 
      desc: 'تطوير مهارات المحادثة والطلاقة في النطق',
      image: '/images/conversation.jpg'
    },
    { 
      id: 2, 
      name: 'قواعد اللغة', 
      price: '2000 عملة سورية جديدة ', 
      desc: 'قواعد متكاملة مع تمارين تطبيقية',
      image: '/images/grammar.jpg'
    },
    { 
      id: 3, 
      name: 'IELTS', 
      price: '4000 عملة سورية جديدة ', 
      desc: 'تحضير مكثف لامتحان IELTS مع استراتيجيات النجاح',
      image: '/images/ielts.jpg'
    },
    { 
      id: 4, 
      name: 'الإنجليزية للأعمال', 
      price: '3500 عملة سورية جديدة ', 
      desc: 'الإنجليزية للأعمال والمفاوضات والمقابلات',
      image: '/images/business.jpg'
    }
  ],
  en: [
    { 
      id: 1, 
      name: 'English Conversation', 
      price: '$30', 
      desc: 'Develop conversation skills and fluency',
      image: '/images/conversation.jpg'
    },
    { 
      id: 2, 
      name: 'English Grammar', 
      price: '$20', 
      desc: 'Complete grammar with practical exercises',
      image: '/images/grammar.jpg'
    },
    { 
      id: 3, 
      name: 'IELTS Preparation', 
      price: '$40', 
      desc: 'Intensive IELTS preparation with success strategies',
      image: '/images/ielts.jpg'
    },
    { 
      id: 4, 
      name: 'Business English', 
      price: '$25', 
      desc: 'English for business, negotiations, and interviews',
      image: '/images/business.jpg'
    }
  ]
};

export default function CoursesSection() {
  const { language, t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [customAlert, setCustomAlert] = useState({ show: false, message: '' });

  const whatsappNumber = "963939196057";
  
  // جلب الكورسات حسب اللغة
  const currentCourses = coursesData[language] || coursesData.ar;

  const handleBook = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const showAlert = (message) => {
    setCustomAlert({ show: true, message });
    setTimeout(() => {
      setCustomAlert({ show: false, message: '' });
    }, 3000);
  };

  const sendToWhatsApp = () => {
    if (!selectedCourse) return;
    
    const message = language === 'ar' 
      ? `📚 *طلب حجز كورس جديد*\n\n👤 *الاسم:* ${formData.name}\n📱 *رقم الجوال:* ${formData.phone}\n📖 *الكورس:* ${selectedCourse.name}\n💰 *السعر:* ${selectedCourse.price}\n\n📅 *تاريخ الحجز:* ${new Date().toLocaleDateString('ar-SA')}\n⏰ *الوقت:* ${new Date().toLocaleTimeString('ar-SA')}`
      : `📚 *New Course Booking Request*\n\n👤 *Name:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n📖 *Course:* ${selectedCourse.name}\n💰 *Price:* ${selectedCourse.price}\n\n📅 *Booking Date:* ${new Date().toLocaleDateString()}\n⏰ *Time:* ${new Date().toLocaleTimeString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
    
    const successMessage = language === 'ar'
      ? '✅ تم إرسال طلب الحجز بنجاح!\nسيتم التواصل معك عبر واتساب قريباً.'
      : '✅ Booking request sent successfully!\nYou will be contacted via WhatsApp soon.';
    
    showAlert(successMessage);
    
    setShowModal(false);
    setFormData({ name: '', phone: '' });
    setSelectedCourse(null);
  };

  const handleConfirm = () => {
    if (formData.name && formData.phone) {
      sendToWhatsApp();
    } else {
      const errorMessage = language === 'ar' 
        ? '⚠️ الرجاء إدخال جميع البيانات'
        : '⚠️ Please enter all data';
      showAlert(errorMessage);
    }
  };

  return (
    <>
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
                <button className="btn-course" onClick={() => handleBook(course)}>
                  {t('bookSeat')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedCourse && (
          <div className="modal active" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 style={{ color: '#7BBDE8', marginBottom: '1rem' }}>{selectedCourse.name}</h3>
              <input 
                type="text" 
                placeholder={t('name')} 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder={t('phone')} 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button className="btn-confirm" onClick={handleConfirm}>{t('confirm')}</button>
              <button className="btn-cancel" onClick={() => {
                setShowModal(false);
                setSelectedCourse(null);
                setFormData({ name: '', phone: '' });
              }}>{t('cancel')}</button>
            </div>
          </div>
        )}
      </section>

      {/* Custom Alert */}
      {customAlert.show && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <div className="custom-alert-icon">
              {customAlert.message.includes('✅') ? '✅' : '⚠️'}
            </div>
            <p>{customAlert.message.replace('✅', '').replace('⚠️', '')}</p>
          </div>
        </div>
      )}
    </>
  );
}