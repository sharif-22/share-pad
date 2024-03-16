/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        primaryBlack: "#010409",
        secondaryBlack: "#0d1117",
        accentBlack: "#30363d",
        accentBlue: "#1e4273",
      },

      keyframes: {
        swing: {
          "0% , 100%": {
            transform: "rotate(4deg)",
          },
          "50%": {
            transform: "rotate(-4deg)",
          },
          "100%": {
            transform: "rotate(4deg)",
          },
        },
      },
      animation: {
        swing: "swing 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
