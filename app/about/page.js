"use client"

import { useLanguage } from '../context/LanguageContext'
import Leadership from '../components/Leadership' // 1. IMPORT

export default function AboutPage() {
  const { content } = useLanguage()

  return (
    <div className="w-full">
      {/* 2. TIÊU ĐỀ TRANG */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.aboutPage.title}</h1>
      </div>

      {/* 3. TÁI SỬ DỤNG COMPONENT LÃNH ĐẠO */}
      <Leadership content={content.leadership} />

      {/* Chúng ta sẽ thêm phần "Sứ mệnh, Tầm nhìn" vào đây sau */}
    </div>
  );
}