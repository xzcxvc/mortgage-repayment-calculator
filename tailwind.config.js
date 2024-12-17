/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "0px",
      tablet: "640px",
      desktop: "960px",
    },
  },
  plugins: [],
};
