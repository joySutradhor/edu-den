/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gucina-Regular': ['Gucina-Regular', 'sans-serif'],
        'Gucina-Medium': ['Gucina-Medium', 'sans-serif'],
        'Gucina-SemiBold': ['Gucina-SemiBold', 'sans-serif'],
        'Gucina-Bold': ['Gucina-Bold', 'sans-serif'],
        'Varela':['Varela Round', 'sans-serif']
      },
    },
  },
  plugins: [],
}

