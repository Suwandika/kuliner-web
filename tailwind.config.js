/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-2" : '#272727'
      },
      fontFamily: {
        'Pacifico': ['Pacifico', 'cursive'],
        'sora': ['Sora', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

