/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12305B', 
        },
        secondary: {
          DEFAULT:'#4D533C'
        }
      }
    },
  },
  plugins: [],
}