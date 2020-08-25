const { src, task, series, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postCss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const log = require('fancy-log')
const postcssClean = require('postcss-clean')


const sassSourceFile = './src/scss/styles.scss'
const outputFolder = './src/css'
const watchedFolders = './src/scss/**/*'

task('scss', function (done) {
    src(sassSourceFile, { allowEmpty: true })
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function (err) {
            log.error(err.message)
        }))
        .pipe(postCss([autoprefixer, cssnano()]))
        // .pipe(postCss(process.env.ELEVENTY_ENV === "prod" ? postcssClean : ""))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(outputFolder))
        .on('end', done)

})

task('watch', series('scss', function (done) {
    watch(watchedFolders, parallel('scss'))
    done()
}))

task('default', series('watch', function () { }))
task('build', parallel(
    'scss'
));