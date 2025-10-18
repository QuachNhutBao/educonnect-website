import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduConnect Services',
  description: "Connecting institutions with global talent, integrating cutting-edge EdTech, and fostering international partnerships.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}