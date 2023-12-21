/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mobile: { max: "640px" },
      tablet: { min: "641px", max: "1124px" },
      // => @media (min-width: 640px) { ... }

      laptop: { min: "1125px", max: "1280px" },
      // => @media (min-width: 1024px) { ... }

      "laptop-lg": { min: "1281px", max: "1600px" },

      "laptop-xl": { min: "1601px" },
      "from-laptop-to-laptop-xl": { min: "1180px" },
      "from-tablet-to-mobile": { max: "1124px" },
      "from-nav-laptop-to-laptop-xl": { min: "1125px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        inputs: "#eeeeee",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
