module.exports = function(eleventyConfig) {
    // Pass through copy for static assets
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");

    // Watch CSS files for changes
    eleventyConfig.addWatchTarget("src/css/");

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};