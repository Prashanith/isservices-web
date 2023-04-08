/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary:'#1A120B',
      secondary:'#3C2A21',
      tertiary:'#D5CEA3',
      quarternary:'#E5E5CB',
      textHightLight:'#950101'
    },
    extend: {
      backgroundImage: {
        'formbg': "url('assets/blob.svg')",
        'footerbg': "url('assets/footer.svg')",
        'hero-pattern': "url('assets/contact.png')",
      }
    },
  },
  plugins: [],
}
