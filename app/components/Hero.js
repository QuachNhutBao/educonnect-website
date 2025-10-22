import Image from 'next/image'
import Link from 'next/link' // ĐÃ THÊM

export default function Hero({ content }) {
  return (
    <section className="text-center bg-gray-100 dark:bg-gray-800 pt-16 pb-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight">
        {content.title}
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
        {content.subtitle}
      </p>

      {/* --- NÚT CTA MỚI --- */}
      <div className="mt-10">
        <Link
          href="/contact"
          className="py-3 px-8 bg-brand-blue text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          {content.cta} 
        </Link>
      </div>
      {/* -------------------- */}

      {/* Thêm ảnh nhóm sinh viên (tăng margin top) */}
      <div className="mt-12 max-w-5xl mx-auto">
        <Image
          src="/hero_group.jpg"
          alt="Group of students and global talent"
          width={1000}
          height={600}
          className="rounded-xl shadow-2xl object-contain w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}