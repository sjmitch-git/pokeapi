import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/**/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				info: 'var(--info-color)',
				success: 'var(--success-color)',
				warning: 'var(--warning-color)',
				danger: 'var(--danger-error)',
				light: 'var(--light-color)',
				dark: 'var(--dark-error)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
}
export default config
