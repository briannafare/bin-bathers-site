/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A45',
        green: {
          brand: '#2D8C4E',
        },
        amber: {
          brand: '#D4A32C',
        },
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
