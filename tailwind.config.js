/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5db1a7',
        'custom-blue-dark': '#549f96',
        'custom-blue-light': '#7dc1b9',
        'custom-blue-navy': '#4a8e9f',
        'custom-blue-lobster': '#286ba6',
        'custom-beige': '#f1f1f1',
        'custom-blue-title': '#5d7cb1',
        'custom-green-cogs': '#62978e',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      spacing: {
        29: '8.25rem',
        25: '7.25rem',
      },
      scale: {
        200: '2',
      },
      screens: {
        xs: { max: '639px' },
      },
      gap: {
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
