/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'box-width': '230px',
        'border-thickness': '3px',
      },
      colors: {
        'border-color': 'tomato',
        'background-color': '#fff',
      },
      transitionDuration: {
        'custom': '200ms',
        'custom-long': '180ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


