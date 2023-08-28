/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clrPinkDark": "#E7816B",
        "clrPinkLight": "#FFAD9B ",
        "clrBlackDark": "#1D1C1E",
        "clrBlackLight": "#333136",
        "clrGrey": "#F1F3F5",
        "clrWhite": "#FFFFFF",
      },
      backgroundImage:{
        "talk-about":"url(./ass)"
      }
    },
  },
  plugins: [],
}

