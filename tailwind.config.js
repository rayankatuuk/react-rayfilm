/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'bg-primary',
    'bg-main',
    'text-main',
    'font-lato',
    'font-poppins'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181A1C',
        'main': '#2F3334',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'screen-3xl': '1920px',
      }
    },
  },
  plugins: [],
}
