/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'headerWidth':"740px",
        "imgWidth":"650px",
        "imgHeightLg":"460px",
      },
      colors:{
        "black":"#2A1B3D",
        "ruby":"#D83F87",
        "ruby2":"#ff3385",
        "blue1":"#44318D",
        "purple":"#E98074",
        "green1":"#A4B3B6",
        "offwhite":"#FAF9F6",
        "ivory":"	#FFFFF0",
        "gray1":"#e6e6e6"
      },
    },
  },
  plugins: [],
}


