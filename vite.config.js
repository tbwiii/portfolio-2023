import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	preprocess: vitePreprocess(),
	plugins: [sveltekit()],
});
