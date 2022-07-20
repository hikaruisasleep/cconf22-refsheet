import adapter from '@sveltejs/adapter-static';
import autoPreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess:  autoPreprocess()
};

export default config;
