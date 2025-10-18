import Image from 'next/image'
import ThemeSwitcher from './ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header({ content, lang, toggleLang }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: content.about },
    { href: '#services', label: content.services },
    { href: '#team', label: content.team },
    { href: '#achievements', label: content.achievements },
    { href: '#contact', label: content.contact },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <Image src="/Logo_Educonnect.png" alt="EduConnect Logo" width={40} height={40} />
              <span className="text-xl font-bold text-brand-blue">EduConnect</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="font-medium text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors">
                {link.label}
              </a>
            ))}
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
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800">
              {link.label}
            </a>
          ))}
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