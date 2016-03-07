'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', '*.png' , 'popup/*'];
var xpiName = 'Fabrique.xpi';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});
