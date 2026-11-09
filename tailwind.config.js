/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yo: {
          dark: "#212121",
          beige: "#D5D3CC",
          cream: "#FAF8F5",
          gray: "#636361",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Libre Caslon Text", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};