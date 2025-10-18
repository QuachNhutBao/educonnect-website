export default function Hero({ content }) {
  return (
    <section className="text-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight">
        {content.title}
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        {content.subtitle}
      </p>
    </section>
  )
}