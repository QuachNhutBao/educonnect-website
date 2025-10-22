"use client"

import { useLanguage } from '../context/LanguageContext'
import FeaturedServices from '../components/FeaturedServices' // 1. IMPORT

export default function ServicesPage() {
  const { content } = useLanguage()

  return (
    <div className="w-full">
      {/* 2. HIỂN THỊ TIÊU ĐỀ TRANG */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">{content.servicesPage.title}</h1>
      </div>

      {/* 3. TÁI SỬ DỤNG COMPONENT DỊCH VỤ NỔI BẬT */}
      {/* Chúng ta sẽ dùng lại component này, nhưng có thể sửa đổi sau */}
      <FeaturedServices 
        content={{...content.services, ...content.featuredServices}} 
      />

      {/* Chúng ta sẽ thêm các dịch vụ chi tiết khác vào đây sau */}
    </div>
  );
}