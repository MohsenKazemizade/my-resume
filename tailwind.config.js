/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Portfolio: "url('./src/assets/singlePagePortfolio.png')",
        animatedCV: "url('./src/assets/animatedCV.png')",
        project3: "url('./src/assets/project3.png')",
        project4: "url('./src/assets/project4.png')",
      },
      transitionDuration: {
        600: "600ms",
      },
      boxShadow: {
        card: "0px 10px 30px -5px rgba(0, 0, 0, 8)",
      },
      flex: {
        "10rem": "1 1 10rem",
        "20rem": "1 1 20rem",
      },
      colors: {
        arrow: "rgb(229,231,235)",
        arrowhover: "rgb(234,179,8)",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
