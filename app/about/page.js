"use client"

import { useLanguage } from '../context/LanguageContext'
import Mission from '../components/Mission' // 1. IMPORT MISSION
import Leadership from '../components/Leadership'

export default function AboutPage() {
  const { content } = useLanguage()

  return (
    <div className="w-full">
      {/* TIÊU ĐỀ TRANG */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.aboutPage.title}</h1>
      </div>

      {/* 2. THÊM COMPONENT SỨ MỆNH VÀO ĐÂY */}
      <Mission content={content.mission} />
      
      {/* COMPONENT LÃNH ĐẠO ĐÃ CÓ */}
      <Leadership content={content.leadership} />
    </div>
  );
}