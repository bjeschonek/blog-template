export default function (eleventyConfig) {
    // Set passthrough behavior for dev server to save time
    eleventyConfig.setServerPassthroughCopyBehavior('copy');

    // Direct 11ty to use .eleventyignore instead of .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Passthroughs - public and assets should be handled by Vite
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    // Collection Definitions
    eleventyConfig.addCollection('blog', (collection) => {
        // Returns a copy of the collection reversed
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    return {
        // Template engines
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        // .html files can be used for layouts/partials instead of .njk
        htmlTemplateEngine: 'njk',

        // Define input and output directory names - using defaults here
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data'
        },
    };
};