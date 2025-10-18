/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/page.js",
    "./app/layout.js",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", // Đã cập nhật đường dẫn
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#3b82f6",
        "brand-gray": "#6b7280",
      },
    },
  },
  plugins: [],
};
