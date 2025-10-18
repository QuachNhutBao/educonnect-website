'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import CoreServices from './components/CoreServices'
import ValueProposition from './components/ValueProposition'
import Leadership from './components/Leadership'
import Achievements from './components/Achievements'
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
      <Mission content={content.mission} />
      <CoreServices content={content.services} />
      <ValueProposition content={content.value} />
      <Leadership content={content.leadership} />
      <Achievements content={content.achievements} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </main>
  )
}