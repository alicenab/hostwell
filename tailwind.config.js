/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#328E6E',
          50: '#EBF5F2',
          100: '#D7EBE5',
          200: '#AFD7CB',
          300: '#87C3B1',
          400: '#5FAF97',
          500: '#328E6E', // Deep Green
          600: '#276F56',
          700: '#1D503F',
          800: '#133128',
          900: '#091811',
        },
        secondary: {
          DEFAULT: '#67AE6E',
          50: '#F0F7F1',
          100: '#E1EFE3',
          200: '#C3DFC7',
          300: '#A5CFAB',
          400: '#87BF8F',
          500: '#67AE6E', // Medium Green
          600: '#4E9255',
          700: '#3A6D3F',
          800: '#26482A',
          900: '#122415',
        },
        accent: {
          DEFAULT: '#90C67C',
          50: '#F5F9F3',
          100: '#EBF4E7',
          200: '#D7E9CF',
          300: '#C3DEB7',
          400: '#AFD39F',
          500: '#90C67C', // Light Green
          600: '#71B559',
          700: '#558C41',
          800: '#395D2B',
          900: '#1C2E16',
        },
        background: {
          DEFAULT: '#E1EEBC',
          light: '#EDF4D5',
          lighter: '#F6FAEE',
          dark: '#C8D5A3',
          darker: '#AFBC8A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};