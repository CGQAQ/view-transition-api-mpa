import {defineConfig} from "vite";

export default defineConfig({
    mode: 'development',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                page2: 'page-2.html',
            },
        },
    },
});