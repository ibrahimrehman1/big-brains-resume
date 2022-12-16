/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
      },
      fontFamily: {
        'rambla': 'Rambla',
        'montserrat': 'Montserrat',
        'cursive': 'cursive'
      }
    },
    plugins: [],
  }