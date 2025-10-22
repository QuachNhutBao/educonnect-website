"use client"

import { useLanguage } from '../context/LanguageContext'

export default function ServicesPage() {
  const { content } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">{content.servicesPage.title}</h1>
      {/* Chúng ta sẽ thêm component <FeaturedServices> vào đây sau */}
    </div>
  );
}