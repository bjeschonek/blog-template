const { DateTime } = require('luxon');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const readingTime = require('eleventy-plugin-reading-time');


module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(readingTime);
    
    // Tell 11ty to use .eleventyignore instead of .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Custom Filters
    eleventyConfig.addFilter('createReadableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LLL dd yyyy');
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
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