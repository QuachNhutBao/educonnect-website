"use client"

import { useLanguage } from '../context/LanguageContext'
import Contact from '../components/Contact'

export default function ContactPage() {
  const { content } = useLanguage()

  // 1. THÊM GUARD
  if (!content) {
    return null;
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <div className="w-full">
      <Contact content={content.contact} />
    </div>
  );
}