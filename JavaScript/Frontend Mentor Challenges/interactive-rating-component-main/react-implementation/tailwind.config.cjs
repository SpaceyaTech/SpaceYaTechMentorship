/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "#1F2630",
        pillBG:'#262F38',
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily:{
        overpass: ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
};
