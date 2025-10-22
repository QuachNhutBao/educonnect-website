"use client"

import { useLanguage } from '../context/LanguageContext'
import PartnersGrid from '../components/PartnersGrid'

export default function PartnersPage() {
  const { content } = useLanguage()

  // 1. THÊM GUARD
  if (!content) {
    return null;
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.partnersPage.title}</h1>
      </div>
      <PartnersGrid content={content.partnersGrid} />
    </div>
  );
}