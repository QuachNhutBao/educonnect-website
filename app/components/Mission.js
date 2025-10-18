import { Globe, Cpu } from 'lucide-react'
import Image from 'next/image'

export default function Mission({ content }) {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Cột 1: Ảnh minh họa */}
        <div className="shadow-2xl rounded-xl overflow-hidden md:order-2"> 
            <Image 
                src="/online_learning.jpg" 
                alt="Students using EdTech solutions" 
                width={800} 
                height={500}
                className="w-full h-auto object-cover"
            />
        </div>

        {/* Cột 2: Văn bản Sứ mệnh */}
        <div className="md:order-1"> 
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {content.description}
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-6">{content.pillarsTitle}</h3>
            <div className="space-y-6">
                <div className="flex items-start">
                    <Globe className="h-6 w-6 text-brand-blue mr-4 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-xl font-semibold mb-1">{content.pillar1_title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{content.pillar1_desc}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Cpu className="h-6 w-6 text-brand-blue mr-4 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-xl font-semibold mb-1">{content.pillar2_title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{content.pillar2_desc}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}