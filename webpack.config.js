var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('app', './assets/js/main.js')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/build/style.css
    .addStyleEntry('style', './assets/scss/style.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    //.enableVersioning()
    .enableVueLoader();
;

module.exports = Encore.getWebpackConfig();
