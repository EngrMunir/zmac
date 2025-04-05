import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm:'640px',
			md:'768px',
			lg:'1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1552px',
			'4xl': '1792px'
		},
		container: {
			center: true
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'page-header-liner': 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(67,205,238,0.15449929971988796) 50%, rgba(255,255,255,1) 85%)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				"inter": "var(--inter)"
			},
			fontSize: {
				xs: [
					'0.75rem',
					{
						lineHeight: 'normal'
					}
				],
				sm: [
					'0.875rem',
					{
						lineHeight: 'normal'
					}
				],
				base: [
					'1rem',
					{
						lineHeight: 'normal'
					}
				],
				lg: [
					'1.125rem',
					{
						lineHeight: 'normal'
					}
				],
				xl: [
					'1.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'2xl': [
					'1.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'3xl': [
					'1.875rem',
					{
						lineHeight: 'normal'
					}
				],
				'4xl': [
					'2.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'5xl': [
					'3rem',
					{
						lineHeight: 'normal'
					}
				],
				'6xl': [
					'3.75rem',
					{
						lineHeight: 'normal'
					}
				],
				'7xl': [
					'4.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'8xl': [
					'6rem',
					{
						lineHeight: 'normal'
					}
				],
				'9xl': [
					'8rem',
					{
						lineHeight: 'normal'
					}
				]
			},
			boxShadow: {
				'4xl': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
			},
			spacing: {
				'7.5': '30px',
				'12.5': '50px',
				'15': '60px',
				'25': '100px',
				'30': '100px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
