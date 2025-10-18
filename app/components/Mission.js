import { Globe, Cpu } from 'lucide-react'

export default function Mission({ content }) {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          {content.description}
        </p>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-10">{content.pillarsTitle}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Globe className="h-10 w-10 text-brand-blue mb-4" />
            <h4 className="text-xl font-semibold mb-2">{content.pillar1_title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{content.pillar1_desc}</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Cpu className="h-10 w-10 text-brand-blue mb-4" />
            <h4 className="text-xl font-semibold mb-2">{content.pillar2_title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{content.pillar2_desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}