/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1216px',
    },
    fontFamily: {
      'league-spartan' :['League Spartan', 'serif'],
      'roboto': ['Roboto', 'serif'],
      'sans': ['Roboto', 'serif'],
    },

    extend: {
      colors: {
        'primary': 'var(--color-primary)',
      },

    },
  },
  plugins: [],
}

