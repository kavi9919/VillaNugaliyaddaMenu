/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#57855E',
      secondary: '#F0EDE4',
      yelloClr: '#F9E550',
      white:'#FFFFFF',
      gray:'#242229',
      black:'#000000'
    },
    fontFamily:{
      handwrite:["Kaushan Script", "cursive"],
      poppins:["Poppins", "sans-serif"],
      jost:["Jost", "sans-serif"],

    },
    extend: {},
  },
  plugins: [],
}

