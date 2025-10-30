module.exports = (eleventyConfig) => {

    // Tell 11ty to use the .eleventyignore instead of .gitignore
    config.setUseGitIgnore(false);

    return {
        // Allows use of Nunjucks within .html files instead of .njk files
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        // Changing default input and output folder names
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};