"use client" // 1. CHUYỂN SANG CLIENT

import { useLanguage } from '../context/LanguageContext' // 2. IMPORT HOOK

export default function AboutPage() {
  const { content } = useLanguage() // 3. LẤY CONTENT

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 4. SỬ DỤNG CONTENT ĐỘNG */}
      <h1 className="text-4xl font-bold text-center">{content.aboutPage.title}</h1>
    </div>
  );
}