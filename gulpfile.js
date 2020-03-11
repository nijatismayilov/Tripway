'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const jsMinify = require('gulp-terser');
const cssMinify = require('gulp-csso');
const htmlMinify = require('gulp-htmlmin');
const imageMinify = require('gulp-imagemin');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error: ')
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(cssMinify())
        .pipe(gulp.dest('./dist/styles/'))
});

gulp.task('scripts', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('pages', () => {
    return gulp.src(['./src/**/*.html'])
        .pipe(htmlMinify({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('images', () => {
    return gulp.src('./src/img/*')
        .pipe(imageMinify())
        .pipe(gulp.dest('./dist/img/'))
});

gulp.task('fonts', () => {
    return gulp.src('./src/fonts/*.ttf')
        .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('clean', () => del(['dist']));

gulp.task('default', gulp.series('clean', 'styles', 'scripts', 'pages', 'images', 'fonts'));

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
    gulp.watch("./src/scripts/**/*.js", gulp.series("scripts"));
    gulp.watch("./src/**/*.html", gulp.series("pages"));
    gulp.watch("./src/img/*", gulp.series("images"));
    gulp.watch("./src/fonts/*.ttf", gulp.series("fonts"));
});