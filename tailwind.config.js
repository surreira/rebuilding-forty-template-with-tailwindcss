const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enable: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        anakiwa: "#9bf1ff",
        "lucky-point": "#2a2f4a",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        "forty-5": "5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
