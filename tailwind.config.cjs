/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  include: ["./src/**/*", "./global.d.ts"],
  theme: {
      extend: {
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif']
        },
        colors: {
          primary: '#014f42',
          secondary: '#331b24',
          info: '#331b24',
          success: '#4caf50',
          danger: '#f44336',
          light: '#f1f1f1',
          dark: '#272727'
        }
      },
     plugins: [],
  }
}
