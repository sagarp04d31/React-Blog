/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'serif': ['Garamond', 'Mangal'],
      'mono': ['JetBrains Mono'],
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

