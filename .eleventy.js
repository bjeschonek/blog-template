// 11ty Config File
module.exports = (eleventyConfig) => {

    // Tell 11ty to use the .eleventyignore instead of .gitignore
    config.setUseGitIgnore(false);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        
        // Allows use of Nunjucks within .html files instead of .njk files
        htmlTemplateEngine: 'njk',

        // Changing default input and output folder names
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};