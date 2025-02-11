/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
      },
    },
  },

  plugins: [],
};
