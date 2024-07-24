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
        darkGreen: '#8EA174',
        bgRose: '#f7efe7',
        sidebarGreen : '#284625',
        buttonGreen : '#3C6849',
        filterGreen : '#DEE5C2',

      },
    },
  },
  plugins: [],
}


