export default function Footer({ content }) {
  return (
    <footer className="w-full bg-gray-800 dark:bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">{content.copy}</p>
      </div>
    </footer>
  )
}