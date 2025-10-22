"use client" // Thêm "use client" vì chúng ta dùng onClick

import { MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      {/* Nút Zalo - Sẽ cập nhật link sau */}
      <Link
        href="#" // Tạm thời để href="#"
        // href="https://zalo.me/YOUR_ZALO_NUMBER" 
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Chat via Zalo"
        onClick={(e) => e.preventDefault()} // Ngăn không cho nhảy lên đầu trang
      >
        <MessageCircle size={24} />
      </Link>

      {/* Nút Gọi điện - Sẽ cập nhật link sau */}
      <Link
        href="#" // Tạm thời để href="#"
        // href="tel:YOUR_PHONE_NUMBER"
        className="p-3 bg-brand-blue text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Call Now"
        onClick={(e) => e.preventDefault()} // Ngăn không cho nhảy lên đầu trang
      >
        <Phone size={24} />
      </Link>
    </div>
  )
}