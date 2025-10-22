"use client"

import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import MobileBottomNav from './MobileBottomNav'
import { useLanguage } from '../context/LanguageContext' // Import hook
import { usePathname } from 'next/navigation' // Import pathname

export default function MainLayout({ children }) {
  // Lấy state ngôn ngữ từ "trung tâm" (Context)
  const { lang, content, toggleLang } = useLanguage()
  const pathname = usePathname()

  // Kiểm tra xem có phải là trang chủ không
  const isHomePage = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* 1. Header luôn hiển thị */}
      <Header content={content.header} lang={lang} toggleLang={toggleLang} />

      {/* 2. {children} là nội dung trang (ví dụ: app/page.js hoặc app/about/page.js) */}
      <main className="w-full">
        {children}
      </main>

      {/* 3. Footer, Nút nổi, Nav Mobile luôn hiển thị */}
      <Footer content={content.footer} />
      <FloatingContact />
      <MobileBottomNav /> {/* Phiên bản chỉ có icon không cần content */}
    </div>
  )
}