/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   transparent: "transparent",
      //   wazzup: "#1fb6ff",
      //   purple: "#7e5bef",
      //   pink: "#ff49db",
      //   orange: "#ff7849",
      //   green: "#13ce66",
      //   yellow: "#ffc82c",
      //   grayDark: "#273444",
      //   gray: "#8492a6",
      //   grayLight: "#d3dce6",
      // },
    },

    fontFamily: {
      sans: ["narnnor", "fasthand", "system-ui", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
