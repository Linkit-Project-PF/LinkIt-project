/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkIt:{
          "50": "#CBDAE8",
         "100": "#A9C1D9",
         "200": "#173951",
         "300": "#019A83",
         "400": "#2E2D2C"
        }
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}

