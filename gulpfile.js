const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.',
        }
    });
});

gulp.task('scss', function() {
    return gulp.src('style/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('style/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('style/scss/*.scss', gulp.series('scss'));
});


exports.build = gulp.parallel('browserSync', 'watch');