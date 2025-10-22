"use client"

import { useLanguage } from './context/LanguageContext'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedServices from './components/FeaturedServices'
import PartnersGrid from './components/PartnersGrid'
import Contact from './components/Contact'

export default function Home() {
  const { content } = useLanguage()

  // 1. TIỀN GUARD NÂNG CẤP
  // Chờ cho đến khi các key CỤ THỂ được tải
  if (!content.hero || !content.whyChooseUs || !content.partnersGrid) {
    return null; // Hoặc trả về một component "Đang tải..."
  }

  // 2. Giờ thì code bên dưới đã an toàn
  return (
    <>
      <Hero content={content.hero} />
      <WhyChooseUs content={content.whyChooseUs} />
      <FeaturedServices content={{...content.services, ...content.featuredServices}} />
      <div className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center pt-16">
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