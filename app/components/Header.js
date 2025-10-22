"use client"

import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation' // 1. IMPORT HOOK MỚI

export default function Header({ content, lang, toggleLang }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // 2. LẤY URL HIỆN TẠI

  const navLinks = [
    { href: '/', label: content.home },
    { href: '/about', label: content.about },
    { href: '/services', label: content.services },
    { href: '/partners', label: content.partners },
    { href: '/news', label: content.news },
    { href: '/contact', label: content.contact },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo_Educonnect.png" alt="EduConnect Logo" width={40} height={40} />
              <span className="text-xl font-bold text-brand-blue">EduConnect</span>
            </Link>
          </div>
          
          {/* 3. CẬP NHẬT LOGIC CLASSNAME CHO DESKTOP */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  // Nếu link active, dùng 'text-brand-blue', nếu không thì dùng class cũ
                  className={`font-medium ${
                    isActive 
                      ? 'text-brand-blue' 
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-brand-blue dark:hover:text-brand-blue transition-colors`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="hidden md:block font-bold text-sm px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {lang === 'en' ? 'VN' : 'EN'}
            </button>
            <ThemeSwitcher />
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 4. CẬP NHẬT LOGIC CLASSNAME CHO MOBILE */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navLinks.map(link => {
             const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // Nếu link active, dùng 'bg-gray-200 dark:bg-gray-800', nếu không thì dùng class cũ
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-800 text-brand-blue'
                    : 'text-gray-700 dark:text-gray-200'
                } hover:bg-gray-200 dark:hover:bg-gray-800`}
              >
                {link.label}
              </Link>
            )
          })}
          <button
            onClick={() => {
              toggleLang();
              setIsOpen(false);
            }}
            className="w-full text-left font-bold text-sm px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
          </button>
        </div>
      )}
    </header>
  )
}