/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vine: ['"Great Vibes"', "cursive"], // vine-inspired font
      },
      colors: {
        primary: "#4CAF50", // nature green
        secondary: "#A3D9A5", // light green
        accent: "#FFC1CC", // floral pink
      },
    },
  },
  plugins: [],
};
