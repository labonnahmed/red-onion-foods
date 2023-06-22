/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#F91944",
      "hoverColor": "#e94c6b"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

