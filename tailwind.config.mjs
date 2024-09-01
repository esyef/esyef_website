import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: 'Space Grotesk'
			}
		},
		colors: {
			black: '#151515',
			green: '#4EE1A0',
			darkGrey: '#242424',
			grey: '#d9d9d9',
			white: '#FFFFFF',
			tomato: '#FF6F5B',
		},
		fontSize: {
			XL: '5.5rem',
			L: '3.5rem',
			M: '2rem',
			S: '1.125rem'

		}
	},
	plugins: [],
}
