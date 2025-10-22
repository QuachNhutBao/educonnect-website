import { Briefcase, Globe, Users } from 'lucide-react' // Import icons

export default function WhyChooseUs({ content }) {
  // Mảng chứa các điểm mạnh, lấy nội dung từ i18n
  const features = [
    {
      icon: <Globe size={40} className="text-brand-blue" />,
      title: content.feature1_title,
      description: content.feature1_desc,
    },
    {
      icon: <Briefcase size={40} className="text-brand-blue" />,
      title: content.feature2_title,
      description: content.feature2_desc,
    },
    {
      icon: <Users size={40} className="text-brand-blue" />,
      title: content.feature3_title,
      description: content.feature3_desc,
    },
  ]

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {content.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}