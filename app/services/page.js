"use client"

import { useLanguage } from '../context/LanguageContext'
import FeaturedServices from '../components/FeaturedServices'

export default function ServicesPage() {
  const { content } = useLanguage()

  // 1. THÊM GUARD
  if (!content) {
    return null;
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.servicesPage.title}</h1>
      </div>
      <FeaturedServices 
        content={{...content.services, ...content.featuredServices}} 
        showCta={false}
      />
    </div>
  );
}