/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'text': ['Garamond', 'Mangal']
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

