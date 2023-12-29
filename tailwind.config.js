/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
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
  presets:[keepPreset],
  plugins: [
    require('tailwindcss-animated')
  ],
}

