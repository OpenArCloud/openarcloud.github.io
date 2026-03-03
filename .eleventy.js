module.exports = function(eleventyConfig) {
    // Pass through copy for static assets
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    // Watch all source directories for changes
    eleventyConfig.addWatchTarget("src/");

    // Reduce throttle wait time for faster rebuilds
    eleventyConfig.setWatchThrottleWaitTime(50);

    // BrowserSync configuration for reliable hot reload
    eleventyConfig.setBrowserSyncConfig({
        // Reload on all file changes
        files: [
            '_site/**/*'
        ],
        // Disable ghost mode (syncing across devices) which can cause issues
        ghostMode: false,
        // Disable UI to reduce complexity
        ui: false,
        // Disable open browser on start
        open: false,
        // Notify on reload
        notify: true,
        // No caching
        middleware: [
            function(req, res, next) {
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.setHeader('Pragma', 'no-cache');
                res.setHeader('Expires', '0');
                next();
            }
        ]
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
