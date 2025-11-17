// Import 11ty Plugins
import rssPlugin from '@11ty/eleventy-plugin-rss';
import readingTime from 'eleventy-plugin-reading-time';

// Import Custom Filters
import createReadableDate from './utils/filters/createReadableDate.js';
import dateToIso from './utils/filters/dateToIso.js';
import excerpt from './utils/filters/excerpt.js';
import htmlDateString from './utils/filters/htmlDateString.js';
import limitPosts from './utils/filters/limitPosts.js';

export default function (eleventyConfig) {
    // Set passthrough behavior for dev server to save time
    eleventyConfig.setServerPassthroughCopyBehavior('copy');

    // Direct 11ty to use .eleventyignore instead of .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Passthroughs - public and assets to be handled by Vite
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    // Add 11ty Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(readingTime);

    // Add Custom Filters
    eleventyConfig.addFilter('createReadableDate', createReadableDate);
    eleventyConfig.addFilter('dateToIso', dateToIso);
    eleventyConfig.addFilter('excerpt', excerpt);
    eleventyConfig.addFilter('htmlDateString', htmlDateString);
    eleventyConfig.addFilter('limitPosts', limitPosts);

    // Collection Definitions
    eleventyConfig.addCollection('blog', (collection) => {
        // Returns a copy of the collection reversed
        return [...collection.getFilteredByGlob('./src/posts/**/*.md')].reverse();
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