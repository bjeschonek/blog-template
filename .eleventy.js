// Import Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const readingTime = require('eleventy-plugin-reading-time');
const eleventyVitePlugin = require('@11ty/eleventy-plugin-vite');

// Import Filters
const createReadableDate = require('./utils/filters/createReadableDate.js');
const htmlDateString = require('./utils/filters/htmlDateString.js');
const excerpt = require('./utils/filters/excerpt.js');
const limitPosts = require('./utils/filters/limitPosts.js');
const dateToIso = require('./utils/filters/dateToIso.js');

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addPlugin(eleventyVitePlugin, {
        tempFolderName: '.11ty-vite',
        viteOptions: {
            publicDir: 'public',
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
            }
        }
    });
    
    // Tell 11ty to use .eleventyignore instead of .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Add Filters
    eleventyConfig.addFilter('createReadableDate', createReadableDate);
    eleventyConfig.addFilter('htmlDateString', htmlDateString);
    eleventyConfig.addFilter('excerpt', excerpt);
    eleventyConfig.addFilter('limitPosts', limitPosts);
    eleventyConfig.addFilter('dateToIso', dateToIso);

    // Collections
    eleventyConfig.addCollection('blog', (collection) => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    return {
        // Defines template engines, allows for use of .html files instead of .njk
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        // Renames input and output directories
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};