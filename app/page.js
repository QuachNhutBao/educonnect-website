"use client" // Vẫn cần "use client" để dùng hook useLanguage

import { useLanguage } from './context/LanguageContext' // 1. IMPORT hook
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedServices from './components/FeaturedServices'
import Contact from './components/Contact'
// --- KHÔNG CẦN import Header, Footer, useState, useEffect, i18n ---

export default function Home() {
  // 2. LẤY CONTENT TỪ TRUNG TÂM (CONTEXT)
  const { content } = useLanguage()

  // --- KHÔNG CẦN LOGIC (useState, useEffect, toggleLang) ---

  return (
    // Component MainLayout (cha) đã có class "flex flex-col items-center"
    // nên chúng ta không cần <main> ở đây
    <>
      {/* 3. CHỈ RENDER CÁC COMPONENT CỦA TRANG CHỦ */}
      <Hero content={content.hero} />
      <WhyChooseUs content={content.whyChooseUs} />
      <FeaturedServices content={{...content.services, ...content.featuredServices}} />
      <Contact content={content.contact} />
    </>
    // --- KHÔNG CẦN RENDER Header, Footer ---
  )
}