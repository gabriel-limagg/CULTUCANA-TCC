/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'RedRose': '"Red Rose"',
      'aleo':  '"Aleo"',
      'lilita': '"Lilita One"'
    }
  },
  plugins: [],

}