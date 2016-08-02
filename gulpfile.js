'use strict';

var gulp = require('gulp');
var sass = require ('gulp-sass');

var dest = './dist/public/gtk/play-dark';

gulp.task('sass', () => {
  gulp.src('./gtk/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

gulp.task('sass:watch', () => {
  gulp.watch('./gtk/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
