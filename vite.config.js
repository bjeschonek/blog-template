import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    publicDir: '_site',
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
    plugins: [
        tailwindcss()
    ]
});