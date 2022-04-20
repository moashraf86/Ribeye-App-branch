module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'neutral-50'  : '#F8F8F8',
        'neutral-200' : '#F3F3F3',
        'neutral-700' : '#7C7C7C',
        'neutral-900' : '#292929',
        'black'       : '#000000',
        'accent'      : '#ED542B',
        'indigo-700'  : '#853FFF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'arrow'         : "url('../dist/images/arrow.svg')",
        'popup-pattern' : "url('../dist/images/popup-bg.svg')"
      },
      backgroundPosition: {
        'right-center': 'top 50% right 2rem',
        'center-6': 'center 6px',
      }
    },
  },
  plugins: [],
}
