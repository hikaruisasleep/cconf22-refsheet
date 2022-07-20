import adapter from '@sveltejs/adapter-static';
import autoPreprocess from 'svelte-preprocess';

const dev = "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/cconf22-refsheet",
		},
		appDir: 'internal',
		prerender: {
			default: true
		}
	},
	preprocess:  autoPreprocess()
};

export default config;
