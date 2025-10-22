import Link from 'next/link'

export default function Footer({ content }) {
  // Các link này sẽ lấy label từ file i18n (bên trong mục "footer")
  const links = [
    { href: '/about', label: content.about },
    { href: '/services', label: content.services },
    { href: '/partners', label: content.partners },
    { href: '/news', label: content.news },
    { href: '/contact', label: content.contact },
  ]

  return (
    <footer className="w-full bg-gray-800 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-gray-400">{content.copy}</p>
      </div>
    </footer>
  )
}