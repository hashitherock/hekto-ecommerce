/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ["Josefin Sans", "sans-serif"],
        'lato': ["Lato", "sans-serif"],
      },
      backgroundColor: {
        'primary': ["#7E33E0"]
      }
    },
  },
  plugins: [],
}