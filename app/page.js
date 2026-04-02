// app/page.js
"use client";
import CoursesSection from '@/components/CoursesSection';
import OnlineSection from '@/components/OnlineSection';
import ContactSection from '@/components/ContactSection';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <HeroSlider /> {/* السلايدر هو الواجهة الرئيسية */}
      <CoursesSection />
      <OnlineSection />
      <ContactSection />
      <footer style={{ background: '#001D39', textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(123, 189, 232, 0.3)' }}>
        <div className="container">
          <p> جميع الحقوق محفوظة &copy; 2026 Karim Dahboul </p>
        </div>
      </footer>
    </>
  );
}