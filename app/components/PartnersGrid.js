import Image from 'next/image'

export default function PartnersGrid({ content }) {
  const partners = content.logos || []

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center" title={partner.name}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain dark:bg-white dark:p-2 dark:rounded-lg" // <-- ĐÃ SỬA DÒNG NÀY
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}