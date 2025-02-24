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
        primary: 'var(--color-primary)',
        black: {
          200: 'var(--color-black-200)',
          600: 'var(--color-black-600)',
          700: 'var(--color-black-700)',
        },
        orange: {
          500: 'var(--color-orange-500)'
        }
      },

      container: {
        padding: {
          DEFAULT: '1rem',
        }
      },

      fontSize: {
        title: 'var(--font-size-title)'
      },
      lineHeight: {
        title: 'var(--line-height-title)'
      },
      padding: {
        section: 'var(--padding-section)'
      }

    },
  },
  plugins: [],
}

