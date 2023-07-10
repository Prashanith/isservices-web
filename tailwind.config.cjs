/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A120B",
        secondary: "#3C2A21",
        tertiary: "#EFF5F5",
        quarternary: "#EFF5F5",
        textHightLight: "#950101",
      },
      backgroundImage: {
        formbg: "url('assets/blob.svg')",
        footerbg: "url('assets/footer.svg')",
        landingbg: "url('assets/interior.jpg')",

      },
    },
  },
  plugins: [],
};
