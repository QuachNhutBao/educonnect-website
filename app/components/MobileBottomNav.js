"use client" 

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, Phone, Newspaper, Users } from 'lucide-react'

export default function MobileBottomNav() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', icon: <Home size={24} /> },
    { href: '/services', icon: <Briefcase size={24} /> },
    { href: '/partners', icon: <Users size={24} /> },
    { href: '/news', icon: <Newspaper size={24} /> },
    { href: '/contact', icon: <Phone size={24} /> },
  ]

  return (
    // md:hidden - chỉ hiển thị trên mobile
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              // Thêm class 'text-brand-blue' nếu link đang active
              className={`p-3 ${
                isActive
                  ? 'text-brand-blue'
                  : 'text-gray-600 dark:text-gray-300'
              } hover:text-brand-blue transition-colors`}
            >
              {link.icon}
              {/* Đã loại bỏ <span>{link.label}</span> */}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}