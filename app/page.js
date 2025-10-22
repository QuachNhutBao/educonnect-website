'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedServices from './components/FeaturedServices' // 1. IMPORT
import Contact from './components/Contact'
import Footer from './components/Footer'

import en from '../i18n/en.json'
import vi from '../i18n/vi.json'

export default function Home() {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(en);

  useEffect(() => {
    setContent(lang === 'en' ? en : vi);
  }, [lang]);

  const toggleLang = () => {
    setLang(currentLang => (currentLang === 'en' ? 'vi' : 'en'));
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header content={content.header} lang={lang} toggleLang={toggleLang} />
      <Hero content={content.hero} />
      <WhyChooseUs content={content.whyChooseUs} />
      
      {/* 2. THÊM VÀO ĐÂY (truyền content.services và content.featuredServices) */}
      <FeaturedServices content={{...content.services, ...content.featuredServices}} />

      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </main>
  )
}