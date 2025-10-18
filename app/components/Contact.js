import { Phone, Mail } from "lucide-react";

export default function Contact({ content }) {
  return (
    <section id="contact" className="scroll-mt-16 bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          {content.subtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{content.vietnam_office}</h3>
          <div className="space-y-4">
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-brand-blue" />
              <span>+84 934 045 240</span>
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-brand-blue" />
              <span>techenglish101@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{content.malaysia_office}</h3>
          <div className="space-y-4">
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-brand-blue" />
              <span>+60 16 666 2785</span>
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-brand-blue" />
              <span>yeohsc@hotmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
