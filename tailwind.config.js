/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#0f172a',
        marooon: '#800000',
        third:  '#64748b',
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

