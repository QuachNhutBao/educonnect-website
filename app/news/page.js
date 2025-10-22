"use client"

import { useLanguage } from '../context/LanguageContext'
import FeaturedPost from '../components/FeaturedPost' // 1. IMPORT

export default function NewsPage() {
  const { content } = useLanguage()

  return (
    <div className="w-full">
      {/* TIÊU ĐỀ TRANG */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.newsPage.title}</h1>
      </div>

      {/* 2. THÊM COMPONENT BÀI VIẾT NỔI BẬT */}
      <FeaturedPost content={content.newsSection} />
    </div>
  );
}