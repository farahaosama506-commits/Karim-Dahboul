// app/layout.js - تأكد من هذا الملف
import './globals.css'
import './styles.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: {
    default: 'معلم اللغة الإنجليزية - كورسات وحصص أونلاين',
    template: '%s | معلم اللغة الإنجليزية'
  },
  description: 'تعلم اللغة الإنجليزية مع أفضل المعلمين من خلال كورسات وحصص أونلاين مخصصة للطلاب العرب.',
  keywords: [
    'تعلم اللغة الإنجليزية',
    'كورس إنجليزي',
    'حصص أونلاين',
    'تعليم اللغة الإنجليزية',
    'تدريب المحادثة الإنجليزية'
  ],
  authors: [{ name: 'Karim Dahboul', url: 'https://example.com' }],
  creator: 'Karim Dahboul',
  publisher: 'Karim Dahboul',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'معلم اللغة الإنجليزية - كورسات وحصص أونلاين',
    description: 'تعلم اللغة الإنجليزية مع أفضل المعلمين من خلال كورسات وحصص أونلاين مخصصة للطلاب العرب.',
    url: '/',
    siteName: 'معلم اللغة الإنجليزية',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/conversation.jpg',
        width: 1200,
        height: 630,
        alt: 'تعلم اللغة الإنجليزية عبر كورسات وحصص أونلاين'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معلم اللغة الإنجليزية - كورسات وحصص أونلاين',
    description: 'تعلم اللغة الإنجليزية مع أفضل المعلمين من خلال كورسات وحصص أونلاين مخصصة للطلاب العرب.',
    creator: '@karimdahboul',
    images: ['/images/conversation.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "معلم اللغة الإنجليزية",
      "url": "https://example.com",
      "logo": "https://example.com/favicon.svg",
      "description": "تعلم اللغة الإنجليزية مع أفضل المعلمين من خلال كورسات وحصص أونلاين مصممة للطلاب العرب.",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+963939196057",
          "availableLanguage": ["Arabic", "English"]
        }
      ]
    })
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}