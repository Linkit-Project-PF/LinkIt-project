/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10000s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        linkIt: {
          50: "#CBDAE8",
          100: "#A9C1D9",
          200: "#173951",
          300: "#01A28B",
          400: "#2E2D2C",
          500: "#EBEDEF",
          600: "#D7DBDF",
          700: "#666666",
          800: "#e5e7eb",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        ssm: "540px",
        "1xl": "1440px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require("flowbite/plugin"), require(`tw-elements/dist/plugin`)],
};
