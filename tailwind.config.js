/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",    
    "./public/**/*.html",
    "./public/**/*.js",
    "./**/*.html",
   
  ],
  theme: {
    extend: {
      backgroundImage:{
        HomeDes:"url('assets/home/background-home-desktop.jpg')",//space-tourism-website-main/assets/destination/background-destination-desktop.jpg
        HomeMob:"url('assets/home/background-home-mobile.jpg')",
        HomeTab:"url('assets/home/background-home-tablet.jpg')",

        CrewDes:"url('assets/crew/background-crew-desktop.jpg')",
        CrewMob:"url('assets/crew/background-crew-mobile.jpg')",
        CrewTab:"url('assets/crew/background-crew-tablet.jpg')",

        DestinationDes:"url('assets/destination/background-destination-desktop.jpg')",
        DestinationMob:"url('assets/destination/background-destination-mobile.jpg')",
        DestinationTab:"url('assets/destination/background-destination-tablet.jpg')",

        TechnologyDes:"url('assets/technology/background-technology-desktop.jpg')",
        TechnologyMob:"url('assets/technology/background-technology-mobile.jpg')",
        TechnologyTab:"url('assets/technology/background-technology-tablet.jpg')",
      },
      colors:{
        primary:"#0B0D17",
        secondary:"#D0D6F9",
        tertiary:"#53555f",
        fourth:"#8f9095",
      },
      fontFamily:{
        sans:["'Barlow Condensed'", 'sans-serif'],
        serif:["'Bellefair'", 'serif'],
      },
      screens:{
        smallTab:'430px',
      },
    },
  },
  plugins: [],
}

