/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        linkIt: {
          50: "#CBDAE8",
          100: "#A9C1D9",
          200: "#173951",
          300: "#01A28B",
          400: "#2E2D2C",
          500: "#ECEEF0",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
