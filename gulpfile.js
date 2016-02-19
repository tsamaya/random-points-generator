'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jasminetask = require('gulp-jasmine');

var paths = {
  sources: ['lib/**/*.js', 'spec/**/*.js', '*.js', ],
  spec: ['spec/**/*.js']
};
function lint() {
  return gulp.src(['lib/**/*.js',
      'spec/**/*.js',
      '*.js'
    ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}

function test() {
  return gulp.src('spec/**/*.js')
    .pipe(jasminetask());
}

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sources, ['test']);
});

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['watch', 'test']);
