// app/layout.js - تأكد من هذا الملف
import './globals.css'
import './styles.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: 'معلم اللغة الإنجليزية - كورسات وحصص أونلاين',
  description: 'تعلم اللغة الإنجليزية مع أفضل المعلمين - كورسات وحصص أونلاين',
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