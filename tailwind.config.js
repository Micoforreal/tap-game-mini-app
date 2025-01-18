/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B46C1",
      },
      fontFamily: {
        adlam: '"ADLaM Display", serif',
        jakarta: '"Plus Jakarta Sans", serif',
        grotesk: '"Space Grotesk", serif',
      },
    },
  },
  plugins: [],
};
