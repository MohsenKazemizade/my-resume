/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        '10rem': '1 1 10rem',
        '20rem': '1 1 20rem',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
