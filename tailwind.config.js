/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "layer-1": '#BE6BFF',
        "layer-2": '#FFF06B',
        "layer-3": '#6B9DFF',
        "layer-4": '#FF5F49',
        "layer-5": '#FFAB49',
        "layer-6": '#FFCC49',
        "layer-7": '#D0FF49',
        "layer-8": '#FADC00',
        "layer-9": '#E9E9EC',
      },
      backgroundImage: {
        "hero2": "url('./assets/images/hero2.jpg')",
        "galaxy": "url('./assets/images/galaxy.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}