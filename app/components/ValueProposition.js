import { CheckCircle } from 'lucide-react'

export default function ValueProposition({ content }) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{content.subtitle}</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-brand-blue mb-4">{content.prop1_title}</h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop1_item1}</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop1_item2}</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop1_item3}</span></li>
          </ul>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-brand-blue mb-4">{content.prop2_title}</h3>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop2_item1}</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop2_item2}</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{content.prop2_item3}</span></li>
          </ul>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-brand-blue mb-4">{content.prop3_title}</h3>
          <p>{content.prop3_desc}</p>
        </div>
      </div>
    </section>
  )
}