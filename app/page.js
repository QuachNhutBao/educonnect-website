"use client"

import { useLanguage } from './context/LanguageContext'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedServices from './components/FeaturedServices'
import PartnersGrid from './components/PartnersGrid' // 1. IMPORT PARTNERS GRID
import Contact from './components/Contact'

export default function Home() {
  const { content } = useLanguage()

  return (
    <>
      <Hero content={content.hero} />
      <WhyChooseUs content={content.whyChooseUs} />
      <FeaturedServices content={{...content.services, ...content.featuredServices}} />

      {/* 2. THÊM PHẦN ĐỐI TÁC (SOCIAL PROOF) VÀO TRANG CHỦ */}
      <div className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center pt-16">
           {/* Lấy tiêu đề từ i18n mà chúng ta đã thêm ở Bước 64 */}
          <h2 className="text-3xl sm:text-4xl font-bold">
            {content.partnersGrid.title}
          </h2>
        </div>
        <PartnersGrid content={content.partnersGrid} />
      </div>
      
      <Contact content={content.contact} />
    </>
  )
}