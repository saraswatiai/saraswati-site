/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f0ff',
					100: '#e5e5ff',
					200: '#d0d0ff',
					300: '#b3b3ff',
					400: '#8080ff',
					500: '#6b5fff',
					600: '#5b3fff',
					700: '#4d2eef',
					800: '#3f25c9',
					900: '#3620a3',
				},
				dark: {
					bg: '#0a0a0f',
					surface: '#12121a',
					border: '#1f1f2e',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'0%': { opacity: '0.5' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}
