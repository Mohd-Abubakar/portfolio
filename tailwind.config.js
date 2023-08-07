/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm" : "480px",
        "mobile" : {'max':'480px'},
        "tab" : {'min' : '786px','max' : '1030px'},
        "stab" : {'max':'481px','max':'785px'}
      },
      backgroundImage:{
        "background" : "url('/images/background.jpg')"
      }
    },
    fontFamily:{
      Quicksand:['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
}

