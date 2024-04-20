/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'unpkg.com',
				port: '',
				pathname: '/pokeapi-sprites@2.0.2/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/PokeAPI/**',
			},
		],
	},
}

export default nextConfig
