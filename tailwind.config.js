// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgRose: '#FBF6F1',
        bgModule : '#EFF4FF',
        bgSlider : '#F6FFDB',
        bgIcon : '#D7F0E5',
        'purple-200': '#E9D8FD',
        'yellow-200': '#FEF9C3',
        'green-200': '#BBF7D0',
      },
    },
  },
  plugins: [],
}


