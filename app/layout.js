import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import FloatingContact from './components/FloatingContact' // 1. IMPORT

// Cấu hình font Montserrat
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
          {children}
          
          {/* 2. THÊM NÚT NỔI VÀO ĐÂY */}
          <FloatingContact />

        </ThemeProvider>
      </body>
    </html>
  )
}