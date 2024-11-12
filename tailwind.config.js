/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // backgroundImage:{
      //   'home-pattern':"url('./assets/home/background-home-mobile.jpg')"
      // }
    },
  },
  plugins: [],
}

