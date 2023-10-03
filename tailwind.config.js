/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'screen-5': '5vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-86': '86vh',
        'screen-90': '90vh'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

