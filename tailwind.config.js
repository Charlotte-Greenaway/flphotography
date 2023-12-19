/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl':'1200px',
        '3xl':'1700px',
      },
      height: {
        '79': '17rem',
        '80': '20rem',
        '90': '25rem',   // Adjust these values as needed
        '100': '30rem',
        '120': '35rem',
        '135': '40rem',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}