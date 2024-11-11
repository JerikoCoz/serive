/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
      }, dropShadow: {
        'shad': '5px 5px 3px rgba(249, 150, 135, 100.3)',
      },
    },
  },
  plugins: [],
}