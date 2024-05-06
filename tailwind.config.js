/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      black: '#000000',
      reject: '#ff0000',
      accept: '#00FF00',
      logout: '#FF0000',
      text: '#48525b',
      background: '#fafafa',
      tbg: '#57666f',
      primary: '#ff7637',
      secondary: '#a9c1c1',
      accent: '#122128',
      gray: '#808080',
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
