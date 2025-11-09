const rssPlugin = require('@11ty/eleventy-plugin-rss');
const readingTime = require('eleventy-plugin-reading-time');

// Import Filters
const createReadableDate = require('./src/utils/filters/createReadableDate.js');
const htmlDateString = require('./src/utils/filters/htmlDateString.js');
const excerpt = require('./src/utils/filters/excerpt.js');
const limitPosts = require('./src/utils/filters/limitPosts.js');
const dateToIso = require('./src/utils/filters/dateToIso.js');

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(readingTime);
    
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