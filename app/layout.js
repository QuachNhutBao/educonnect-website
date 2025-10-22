import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { LanguageProvider } from './context/LanguageContext' // 1. IMPORT PROVIDER
import MainLayout from './components/MainLayout' // 2. IMPORT LAYOUT MỚI

// Cấu hình font
const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weights: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'EduConnect Services',
  description: "Connecting institutions with global talent, integrating cutting-edge EdTech, and fostering international partnerships.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 3. BỌC MỌI THỨ BẰNG LANGUAGE PROVIDER */}
          <LanguageProvider>
            {/* 4. BỌC {children} BẰNG MAINLAYOUT */}
            <MainLayout>
              {children}
            </MainLayout>
          </LanguageProvider>
          {/* Các component nổi cũ (FloatingContact, MobileBottomNav) đã được chuyển vào MainLayout */}
        </ThemeProvider>
      </body>
    </html>
  )
}