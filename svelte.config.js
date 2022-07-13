import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$styles: 'src/lib/styles',
			$symbols: 'src/lib/assets/symbols'
		}
	}
};

export default config;
