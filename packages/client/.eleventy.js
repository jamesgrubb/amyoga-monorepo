const htmlmin = require("html-minifier");
module.exports = (eleventyConfig) => {


    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    })


    eleventyConfig.addPassthroughCopy('src/css')
    eleventyConfig.addPassthroughCopy('src/images')
    eleventyConfig.addPassthroughCopy('src/js')
    eleventyConfig.addPassthroughCopy({
        "../../node_modules/alpinejs/dist/alpine.js": "js/alpine.js",
    });
    eleventyConfig.addPassthroughCopy({
        "../../node_modules/gsap/dist/gsap.min.js": "js/gsap.js",
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}