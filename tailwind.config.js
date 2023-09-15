const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      width: {
        '1272': '1272px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#FCF7E6',
      black: colors.black,
      white: colors.white,
    }
  },
  plugins: [],
}

