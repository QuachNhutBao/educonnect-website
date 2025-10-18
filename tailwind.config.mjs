/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./app/page.js",
    "./app/layout.js",
    "./app/(components)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3b82f6',
        'brand-gray': '#6b7280',
      },
    },
  },
  plugins: [],
};
export default config;