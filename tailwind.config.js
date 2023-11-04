/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false
	}
};
