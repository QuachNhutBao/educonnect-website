import { Check } from 'lucide-react'

export default function Leadership({ content }) {
  const team = [
    { name: content.member1_name, title: content.member1_title, points: [content.member1_exp1, content.member1_exp2, content.member1_exp3] },
    { name: content.member2_name, title: content.member2_title, points: [content.member2_exp1, content.member2_exp2, content.member2_exp3, content.member2_exp4] }
  ]
  return (
    <section id="team" className="scroll-mt-16 bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{content.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {team.map(member => (
          <div key={member.name} className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-brand-blue font-semibold mb-4">{member.title}</p>
            <ul className="space-y-3">
              {member.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}