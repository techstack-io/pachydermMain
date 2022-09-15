/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Bebas Neue', 'cursive'],
      },
      colors: {
        'cerulean-blue': '#324FAE',
        'dark-tangerine': '#FFB020'
      }
    },
  },
  plugins: [],
}
