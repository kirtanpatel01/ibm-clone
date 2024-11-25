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
        primaryHvr: '#0050e6',
        customGreen: '#0AFFD3',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0f62fe, #2dd4bf, #0d9488, #115e59)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}