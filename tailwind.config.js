/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",    
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0B0D17",
        secondary:"#D0D6F9",
        tertiary:"#53555f",
      },
      fontFamily:{
        sans:["'Barlow Condensed'", 'sans-serif'],
        serif:["'Bellefair'", 'serif'],
      }
    },
  },
  plugins: [],
}

