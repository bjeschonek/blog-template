import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: 'public',
    clearScreen: false,
    server: {
        mode: 'development',
        middlewareMode: true
    },
    appType: 'custom',
    assetsInclude: ['**/*.xml', '**/*.txt'],
    build: {
        outDir: '_site',
        mode: 'production',
        sourcemap: true,
        manifest: true,
        rollupOptions: {
            input: {
                main: './src/assets/js/main.js',
                style: './src/assets/css/main.css'
            },
            output: {
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js'
            }
        }
    },
});