const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function sassToCss() {
    return gulp.src('./style/scss/style.scss')
                .pipe(sass())
                .pipe(gulp.dest('./style/css'))
                .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    })
    gulp.watch('./style/scss/style.scss', sassToCss);
}

exports.style = sassToCss;
exports.watch = watch;