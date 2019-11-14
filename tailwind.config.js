const _ = require('lodash')

module.exports = {
  theme: {
    'transition-property': {
      all: 'all',
      color: 'color',
      bg: 'background-color',
      transform: 'transform',
      left: 'left',
      right: 'right',
      opacity: 'opacity',
    },
    'transition-duration': {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      800: '800ms',
      900: '900ms',
    },
    'transition-timing-function': {
      linear: 'linear',
      ease: 'ease',
      'ease-in-out': 'ease-in-out',
      sine: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
      quadratic: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
      cubic: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      quartic: 'cubic-bezier(0.77, 0, 0.18, 1)',
      quintic: 'cubic-bezier(0.86, 0, 0.07, 1)',
      exponential: 'cubic-bezier(1, 0, 0, 1)',
      circular: 'cubic-bezier(0.79, 0.14, 0.15, 0.86)',
      backward: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    },
    'animation-duration': {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      800: '800ms',
      900: '900ms',
    },
    extend: {
      colors: {
        white: '#ffffff',
        'blue-night': {
          100: '#828896',
          200: '#6e7482',
          300: '#5a606e',
          400: '#464c5a',
          500: '#323846',
          600: '#1e2432',
          700: '#0a101e',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        'blue-sky': {
          100: '#c8ffff',
          200: '#b4ffff',
          300: '#a0ffff',
          400: '#8cefff',
          500: '#78dbf3',
          600: '#64c7df',
          700: '#50b3cb',
          800: '#3c9fb7',
          900: '#288ba3',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '92': '23rem',
      },
      maxHeight: {
        '16': '4rem',
        '20': '5rem',
      },
      inset: {
        '1/10': '10%',
        '1/5': '20%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '7/10': '70%',
        '4/5': '80%',
        '9/10': '90%',
        full: '100%',
        '-1/10': '-10%',
        '-1/5': '-20%',
        '-3/10': '-30%',
        '-2/5': '-40%',
        '-1/2': '-50%',
        '-3/5': '-60%',
        '-7/10': '-70%',
        '-4/5': '-80%',
        '-9/10': '-90%',
        '-full': '-100%',
      },
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities, config }) => {
      const transitionProperty = _.map(
        config('theme.transition-property'),
        (value, key) => {
          return {
            [`.${`tp-${key}`}`]: {
              'transition-property': `${value}`,
            },
          }
        }
      )

      const transitionDuration = _.map(
        config('theme.transition-duration'),
        (value, key) => {
          return {
            [`.${`td-${key}`}`]: {
              'transition-duration': `${value}`,
            },
          }
        }
      )

      const transitionTimingFunction = _.map(
        config('theme.transition-timing-function'),
        (value, key) => {
          return {
            [`.${`ttf-${key}`}`]: {
              'transition-timing-function': `${value}`,
            },
          }
        }
      )

      const animationDuration = _.map(
        config('theme.animation-duration'),
        (value, key) => {
          return {
            [`.${`ad-${key}`}`]: {
              'animation-duration': `${value}`,
            },
          }
        }
      )

      addUtilities(transitionProperty)
      addUtilities(transitionDuration)
      addUtilities(transitionTimingFunction)
      addUtilities(animationDuration)
    },
  ],
}
