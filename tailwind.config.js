module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {height: {
        '1000': '70rem',
        'card': '25rem',
        'cardBack': '20rem',
        'punt': '19rem'
      },width: {
        'card': '16rem',
        'cardBack': '11rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '0.1': '0.1px',
        '0.5': '0.5px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      fontSize: {
        caratterCar:['14px', '25px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        card: ['30px', '38px']
      },
      backgroundImage: {
        'imgBackCard': "url('../src/img/utility/backSfondo.png')",
      }
    },
  },
  plugins: [],
}
