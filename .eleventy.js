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
    // Set passthrough behavior for dev server to save time
    eleventyConfig.setServerPassthroughCopyBehavior('copy');

    // Set passthrough for directories/files
    // Public, assets/css, and assets/js contain files to be handled separately from 11ty
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addPlugin(eleventyVitePlugin);
    
    // Direct 11ty to use .eleventyignore instead of .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Add Filters
    eleventyConfig.addFilter('createReadableDate', createReadableDate);
    eleventyConfig.addFilter('htmlDateString', htmlDateString);
    eleventyConfig.addFilter('excerpt', excerpt);
    eleventyConfig.addFilter('limitPosts', limitPosts);
    eleventyConfig.addFilter('dateToIso', dateToIso);

    // Collection Definitions
    eleventyConfig.addCollection('blog', (collection) => {
        // Returns a copy of the collection reversed
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    return {
        // Defining template engines
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        // Allows use of .html files for layouts/partials instead of .njk
        htmlTemplateEngine: 'njk',

        // Define input and output directory names - using defaults here
        dir: {
            input: 'src',
            // Do not use "dist" for output if Vite's output is set to "dist"
            output: '_site',
            includes: '_includes',
            data: '_data'
        },
    };
};