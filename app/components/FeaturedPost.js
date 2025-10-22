import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPost({ content }) {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">{content.title}</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <Link href="#">
            {/* Ảnh Nổi bật */}
            <Image
              src={content.featured.image}
              alt={content.featured.title}
              width={1000}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              {/* Tiêu đề bài viết */}
              <h3 className="text-2xl font-semibold mb-3 text-brand-blue hover:underline">
                {content.featured.title}
              </h3>
              {/* Đoạn trích dẫn */}
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                {content.featured.excerpt}
              </p>
              {/* Nút Đọc tiếp */}
              <span className="font-semibold text-brand-blue hover:underline">
                {content.featured.cta}
              </span>
            </div>
          </Link>
        </div>

        {/* (Sau này chúng ta có thể thêm lưới các bài viết cũ ở đây) */}
      </div>
    </section>
  )
}