/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        'modelo': {
          default: '#0C1C35',
          '50': '#09182E',
          '100': '#A855F7',
          '150': '#52DDB0',
          '200': '#11264A' 
        },
      }
    },
  },
  plugins: [],
}
