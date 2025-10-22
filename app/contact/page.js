"use client"

import { useLanguage } from '../context/LanguageContext'
import Contact from '../components/Contact' // IMPORT COMPONENT CONTACT

export default function ContactPage() {
  const { content } = useLanguage()

  return (
    <div className="w-full">
      {/* TÁI SỬ DỤNG COMPONENT CONTACT */}
      <Contact content={content.contact} />
    </div>
  );
}