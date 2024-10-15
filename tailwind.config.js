import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "manrope-regular": ["manrope-regular"],
      "manrope-medium": ["manrope-medium"],
      "manrope-semibold": ["manrope-semibold"],
      "manrope-bold": ["manrope-bold"]
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(120deg, rgba(233,170,150,0.6) 18%, rgba(193,133,162,0.6) 50%, rgba(105,98,173,0.6) 100%)',
      },
      colors: {
        "grey": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          150: "#EDEDED",
          200: "#E8E8E8",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#5A5A5A",
          750: "#363636",
          900: "#1E1E1E",
          950: "#151515"
        },

      },
     
      keyframes: {
        slidedown: {
          '0%': { transform: "translateY(-200px)",opacity: "0%" },
          '100%': { transform: "translateY(0%)", opacity: "100%" },
        },
      }
    },
    plugins: [],
  }

}