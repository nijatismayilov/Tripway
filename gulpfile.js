const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('compile-scss', () => {
    return gulp.src('scss/main.scss')
        .pipe(scss())
        .pipe(gulp.dest('styles'))
})

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('compile-scss'))
})