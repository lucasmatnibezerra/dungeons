/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
      fontFamily: {
        zelda: ["The Wild Breath of Zelda", "sans-serif"],
        breath: ["Breathe Fire", "sans-serif"],
        lol: ["BeaufortforLOL-Bold"],
      },
    },
  },
  plugins: [],
};
