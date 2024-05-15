/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#48525b",
      background: "#fafafa",
      primary: "#ff7637",
      secondary: "#d8e7ee",
      accent: "#122128",
      white: "#ffffff",
      black: "#000000"
    },
    fontSize: {
      sm: "0.600rem",
      base: "0.8rem",
      xl: "1.066rem",
      "2xl": "1.421rem",
      "3xl": "1.894rem",
      "4xl": "2.525rem",
      "5xl": "3.366rem",
    },
    fontFamily: {
      heading: "Poppins",
      body: "Poppins",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
