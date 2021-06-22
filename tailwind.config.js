module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ['Krona One', 'sans-serif']
      },
      colors: {
        'accent-1': '#333',
      },
      backgroundImage: theme => ({
        'hero-bg': "url('/logo_hero.jpg')",
        'mountain-bg': "url('https://www.clipartkey.com/mpngs/m/4-45779_mountain-outline-transparent-background.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
