const { defineConfig } = require('vite');
const tailwindcss = require('@tailwindcss/vite');

module.exports = defineConfig({
    publicDir: 'public',
    clearScreen: false,
    server: {
        mode: 'development',
        middlewareMode: true
    },
    appType: 'custom',
    assetsInclude: ['**/*.xml', '**/*.txt'],
    build: {
        mode: 'production',
        sourcemap: true,
        manifest: true,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/css/main.[hash].css',
                chunkFileNames: 'assets/js/[name].[hash].js',
                entryFileNames: 'assets/js/[name].[hash].js'
            }
        }
    },
    plugins: [
        tailwindcss()
    ]
});