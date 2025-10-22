"use client"

import { useLanguage } from '../context/LanguageContext'
import Contact from '../components/Contact'

export default function ContactPage() {
  const { content } = useLanguage()

  // 1. TIỀN GUARD NÂNG CẤP
  if (!content.contact) {
    return null;
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <div className="w-full">
      <Contact content={content.contact} />
    </div>
  );
}