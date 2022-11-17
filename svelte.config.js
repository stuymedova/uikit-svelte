import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		alias: {
			$images: 'src/lib/assets/images',
			$styles: 'src/lib/assets/system-display/styles',
			$symbols: 'src/lib/assets/system-display/symbols'
		}
	}
};

export default config;