import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$images: 'src/lib/assets/images',
			$styles: 'src/lib/system-display/styles',
			$symbols: 'src/lib/system-display/symbols'
		}
	}
};

export default config;
