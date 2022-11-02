import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		alias: {
			$images: 'src/lib/assets/images',
			$styles: 'src/lib/system-display/styles',
			$symbols: 'src/lib/system-display/symbols'
		}
	}
};

export default config;
