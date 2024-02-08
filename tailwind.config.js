/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      lightPink: '#f9f0ff',
      grayishPurple: '#8c6991',
      darkPurple: '#2f1533',
      purple: '#ad28eb',
    },
    fontFamily: { sans: ['Work Sans', 'sans-serif'] },
    extend: {},
  },
  plugins: [],
};
