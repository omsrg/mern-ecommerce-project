const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
			colors: {
				dark: '#171717',
				light: '#f4f4f4',
			},
		},
	},
	plugins: [],
};
