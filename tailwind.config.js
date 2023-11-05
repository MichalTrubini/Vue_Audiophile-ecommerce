/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brick:"#D87D4A",
        brick100: "#FBAF85",
        black100: "#101010",
        grey: "#F1F1F1",
        white100: "#FAFAFA"
      },
      fontSize: {
        mobil: "15px"
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
