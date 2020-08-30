module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Krona One', 'sans-serif']
      },
      colors: {
        'accent-1': '#333',
      },
      backgroundImage: theme => ({
                 'hero-bg': "url('/logo_hero.jpg')"      })
    },
  },
  variants: {},
  plugins: [],
}
