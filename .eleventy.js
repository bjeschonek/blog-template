const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = (eleventyConfig) => {
    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    
    // Tell 11ty to use .eleventyignore instead of .gitignore
    config.setUseGitIgnore(false);

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