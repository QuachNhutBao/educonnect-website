import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// 1. THÊM PROP "showCta = true"
export default function FeaturedServices({ content, showCta = true }) {
  const services = [
    {
      title: content.service1_title,
      description: content.service1_desc_short,
    },
    {
      title: content.service2_title,
      description: content.service2_desc_short,
    },
    {
      title: content.service3_title,
      description: content.service3_desc_short,
    },
  ]

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2. BỌC NÚT CTA TRONG ĐIỀU KIỆN "showCta" */}
        {showCta && (
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center py-3 px-8 bg-brand-blue text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {content.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}