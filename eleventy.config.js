module.exports = (config) => {
    // Passthrough Directories
    config.addPassthroughCopy('./src/images/');

    // Tell 11ty to use the .eleventyignore instead of .gitignore
    config.setUseGitIgnore(false);

    return {
        // Allows use of .html files instead of .njk
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        // Input and output folder names
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};