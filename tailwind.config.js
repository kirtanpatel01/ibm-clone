/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayHover: '#e5e5e5',
        primary: '#0f62fe',
        primaryHvr: '#0050e6'
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}