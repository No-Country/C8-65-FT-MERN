/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste_oscuro:'#3aa18b',
        celeste: '#24BAA0',
        //celeste_claro: '#B3E8E5',
      },
    },
  },
  plugins: [],
}
