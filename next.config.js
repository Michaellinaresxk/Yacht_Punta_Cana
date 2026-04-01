/** @type {import('next').NextConfig} */
// Eliminamos esta línea que importa i18n de next-i18next.config.js
// const { i18n } = require("./next-i18next.config");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ['react-responsive-masonry'],
	// Definimos i18n directamente aquí
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		localeDetection: false,
	},
	images: {
		domains: ['images.unsplash.com', 'res.cloudinary.com'],
	},
	webpack: (config, { isServer }) => {
		// Solución para módulos de Node.js en el cliente
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
				os: false,
				"node:fs": false,
			};
		}
		return config;
	},
};

module.exports = nextConfig;