import { Handshake, UserCheck, Briefcase, Plane } from 'lucide-react'

export default function Achievements({ content }) {
  const items = [
    { icon: Handshake, title: content.item1_title, desc: content.item1_desc },
    { icon: UserCheck, title: content.item2_title, desc: content.item2_desc },
    { icon: Briefcase, title: content.item3_title, desc: content.item3_desc },
    { icon: Plane, title: content.item4_title, desc: content.item4_desc }
  ]
  return (
    <section id="achievements" className="scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <item.icon className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}