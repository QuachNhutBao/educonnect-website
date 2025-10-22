import './globals.css'
import { Montserrat } from 'next/font/google' // Đã đổi sang Montserrat
import { ThemeProvider } from './theme-provider'

// Cấu hình font Montserrat
const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'], // Thêm tiếng Việt
  weights: ['400', '600', '700', '800'], // Thêm các độ đậm
  variable: '--font-montserrat', // Cần thiết cho Tailwind
})

export const metadata = {
  title: 'EduConnect Services',
  description: "Connecting institutions with global talent, integrating cutting-edge EdTech, and fostering international partnerships.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Áp dụng class của Montserrat */}
      <body className={montserrat.className}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}