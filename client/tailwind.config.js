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
        'curious-blue': '#35A0DE',
        'tanzanite-blue': '#124C6E',
        'carnation-pink': '#F75467',
      }
    },
  },
  plugins: [],
}
