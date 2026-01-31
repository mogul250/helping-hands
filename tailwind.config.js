/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f9f7',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#b3d1b3',
          400: '#8fb88f',
          500: '#6b9e6b',
          600: '#5a855a',
          700: '#4a6b4a',
          800: '#3d563d',
          900: '#334633',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#fbf8f5',
          300: '#f8f3ed',
          400: '#f3ebe0',
          500: '#ede2d1',
          600: '#d9cdb8',
          700: '#c4b8a0',
          800: '#a49b85',
          900: '#8a826f',
        },
        terracotta: {
          50: '#fef6f3',
          100: '#fdeae4',
          200: '#fbd5c9',
          300: '#f7b8a3',
          400: '#f19278',
          500: '#e9734f',
          600: '#d65f3f',
          700: '#b14c34',
          800: '#8f3e2c',
          900: '#743428',
        },
      },
    },
  },
  plugins: [],
}
