const CleanCSS = require('clean-css');

module.exports = (css) => {
    return new CleanCSS({}).minify(css).styles;
};