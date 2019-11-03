module.exports = {
	theme: {
		transitionProperty: {
			none: 'none',
			all: 'all',
			color: 'color',
			bg: 'background-color',
			border: 'border-color',
			colors: ['color', 'background-color', 'border-color'],
			opacity: 'opacity',
			transform: 'transform'
		},
		transitionDuration: {
			'75': '75ms',
			'150': '150ms',
			'300': '300ms',
			'500': '500ms',
			'600': '600ms',
			'750': '750ms',
			'900': '900ms'
		},
		transitionTimingFunction: {
			exponential: 'cubic-bezier(1, 0, 0, 1)',
			backward: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
			sine: 'cubic-bezier(0.39, 0.58, 0.57, 1)'
		},
		extend: {
			colors: {
				light: {
					100: '#FFFFFF',
					200: '#ebebeb',
					300: '#d7d7d7',
					400: '#c3c3c3',
					500: '#afafaf'
				},
				dark: {
					500: '#7a7a7e',
					600: '#66666a',
					700: '#525256',
					800: '#3e3e42',
					900: '#2a2a2e'
				},
				amethyst: {
					100: '#ebadff',
					200: '#d799ff',
					300: '#c385ff',
					400: '#af71f9',
					500: '#9b5de5',
					600: '#8749d1',
					700: '#7335bd',
					800: '#5f21a9',
					900: '#4b0d95'
				},
				capri: {
					100: '#50ffff',
					200: '#3cf7ff',
					300: '#28e3ff',
					400: '#14cfff',
					500: '#00bbf9',
					600: '#00a7e5',
					700: '#0093d1',
					800: '#007fbd',
					900: '#006ba9'
				}
			},
			spacing: {
				'72': '18rem',
				'84': '21rem',
				'92': '23rem'
			},
			maxHeight: {
				'16': '4rem',
				'20': '5rem'
			}
		}
	},
	variants: {},
	plugins: [require('tailwindcss-transitions')()]
};
