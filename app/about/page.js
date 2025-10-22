"use client"

import { useLanguage } from '../context/LanguageContext'
import Mission from '../components/Mission'
import Leadership from '../components/Leadership'

export default function AboutPage() {
  const { content } = useLanguage()

  // 1. THÊM GUARD
  if (!content) {
    return null;
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.aboutPage.title}</h1>
      </div>
      <Mission content={content.mission} />
      <Leadership content={content.leadership} />
    </div>
  );
}