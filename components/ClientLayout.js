// components/ClientLayout.js
"use client";
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        {children}
      </main>
    </LanguageProvider>
  );
}