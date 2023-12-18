/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9/16',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#212121',
      purple: '#c200d2',
      red: '#8f040b',
      green: '#43d200',
    },
  },
  plugins: [],
}
