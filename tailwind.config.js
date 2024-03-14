/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react")

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    colors: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {},
      },
      layout: {
        radius: {
          small: "2.5px",
          medium: "5px",
          large: "10px",
        },
      },
    }),
  ],
}
