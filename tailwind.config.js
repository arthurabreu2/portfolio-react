/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s ease",
      },
      keyframes: {
        shine: {
          "0%": {
            left: "-100%",
            opacity: "0"
          },
          "20%": {
            opacity: ".2"
          },
          "50%": {
            opacity: ".4"
          },
          "80%": {
            opacity: ".2"
          },
          "100%": {
            left: "120%",
            opacity: "0"
          },
        },
      },
    },
  },
  plugins: [],
}

