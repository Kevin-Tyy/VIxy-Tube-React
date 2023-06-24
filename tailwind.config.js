/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors : {
				"primary-dark" : "#070515",
				"primary-light" : "#0F0C25",
				"primary-gray" : "#282828",
				"primary-red" : "#FF0000",
				"text-light" : "#F3F5F7",
				"text-dark" : "#D9D9D9",
			},
			screens : {
				xs: "400px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
				"3xl": "1920px",
			}
		}
	},
	plugins: [],
};
