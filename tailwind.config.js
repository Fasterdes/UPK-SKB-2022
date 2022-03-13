const defaultTheme = require('tailwindcss/defaultTheme') ; 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : { 
        blue : { 
          'DEFAULT' : '#325288'
        }, 

        cream : { 
          'DEFAULT' : '#FAEEE7'
        }, 

        pink : { 
          'DEFAULT' : '#D96098'
        }
      }, 

      fontFamily : { 
         'sans' : ['lato' , 'sans-serif']
      }, 

      height : { 
        '82' : '360px'
      }
    },
  },
  plugins: [],
}
