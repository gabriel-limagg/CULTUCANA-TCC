import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: colors.sky,
      slate: colors.slate,
      zinc: colors.zinc,
      stone: colors.stone,
      'fundoHeader': '#1C400B',
      'textColor': '#8BC340',
      'white': '#fff',
      


    },
    extend: {},
    fontFamily:{
      'RedRose': '"Red Rose"',
      'aleo':  '"Aleo"',
      'lilita': '"Lilita One"',
      'rosarivo': '"Rosarivo"'
    }
  },
  plugins: [],

}