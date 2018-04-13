var gulp = require('gulp');

var jshint = require('gulp-jshint');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('lint', function () {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('scripts', function () {
    gulp.src('./js/*.js')
        .pipe(gulp.dest('.dist'))
        .pipe(rename('prase.js'))
        .pipe(babel({
            presets: ['es2017']
        }))
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
})

gulp.task('default', function () {
    gulp.start('scripts');
})