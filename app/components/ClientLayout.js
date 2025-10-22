"use client" // Đây là Client Component chính

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import MobileBottomNav from './MobileBottomNav'

import en from '../../i18n/en.json'
import vi from '../../i18n/vi.json'

export default function ClientLayout({ children }) {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(en);
  const pathname = usePathname();

  useEffect(() => {
    setContent(lang === 'en' ? en : vi);
  }, [lang]);

  const toggleLang = () => {
    setLang(currentLang => (currentLang === 'en' ? 'vi' : 'en'));
  };

  // Ẩn các phần nội dung của trang chủ (như Contact) khi không ở trang chủ
  const isHomePage = pathname === '/'

  return (
    <>
      <Header content={content.header} lang={lang} toggleLang={toggleLang} />
      
      {/* {children} sẽ là app/page.js, app/about/page.js, v.v. */}
      {children} 
      
      <Footer content={content.footer} />
      <FloatingContact />
      <MobileBottomNav content={content.header} />
    </>
  )
}