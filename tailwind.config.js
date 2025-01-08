/** @type {import('tailwindcss').Config} */
import motion from "tailwindcss-motion";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom-only': '0 2px 6px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        grayHover: "#e5e5e5",
        primary: "#0f62fe",
        primaryHvr: "#0050e6",
        customGreen: "#0AFFD3",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #0f62fe, #2dd4bf, #0d9488, #115e59)",
        "custom-gradient-b":
          "linear-gradient(to bottom,#0b66f9, #0078e9, #0083d9, #008bd3, #0093d0, #009ace, #00a1cd, #00a9cb, #00b1c8, #0cb7c0)",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeDown: "fadeDown 0.3s ease-in-out",
        fadeUp: "fadeUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [motion],
};
