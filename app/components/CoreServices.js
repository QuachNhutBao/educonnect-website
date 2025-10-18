import { Users, Code, BarChart } from "lucide-react";

export default function CoreServices({ content }) {
  const services = [
    { icon: Users, title: content.service1_title, desc: content.service1_desc },
    { icon: Code, title: content.service2_title, desc: content.service2_desc },
    {
      icon: BarChart,
      title: content.service3_title,
      desc: content.service3_desc,
    },
  ];
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-gray-100 dark:bg-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {content.title}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 text-center bg-white dark:bg-gray-900 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
          >
            <service.icon className="h-12 w-12 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
