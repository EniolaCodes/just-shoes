/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// colors: {
			// 	"custom-indigo": "bg-indigo-500",
			// 	"custom-neutral": "bg-neutral-400",
			// 	"custom-emerald": "bg-emerald-400",
			// 	"custom-pink": "bg-fuchsia-500",
			// 	"custom-yellow": "bg-yellow-300",
			// 	"custom-red": "bg-red-300",
			// },
			colors: {
				"custom-indigo": "#FF5733 ",
				"custom-neutral": "#3498DB ",
				"custom-emerald": "#F39C12 ",
				"custom-pink": "#8E44AD ",
				"custom-yellow": "#F39C12 ",
				"custom-red": "#27AE60",
			},
		},
	},
	plugins: [],
};
