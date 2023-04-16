/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        apercu: ['Apercu Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '5xl': '3.3rem',
        '10xl': '9rem',
        '11xl': '11rem',
        '12xl': '13rem',
        '13xl': '15rem',
      },
    },
  },
  plugins: [],
}
