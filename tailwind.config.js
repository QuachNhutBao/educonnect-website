/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3b82f6',
        'brand-gray': '#6b7280',
      },
      // --- ĐÃ THÊM KHỐI NÀY ---
      fontFamily: {
        // Đặt Montserrat làm font sans-serif mặc định
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      // -------------------------
    },
  },
  plugins: [],
}