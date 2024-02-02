/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F9FBFC", // primary-light
          700: "#374254", // mode-dark
          800: "#212936", // card-dark
          900: "#121926", // primary-dark
        },
        blue: {
          500: "#3762E4",
        },
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      keyframes: {
        loading: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        loading: "loading 3s linear infinite",
      },
    },
  },
  plugins: [],
};
