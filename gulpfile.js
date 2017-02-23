'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');


var paths = {
  sources: ['lib/**/*.js', '*.js'],
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

gulp.task('mocha', function() {
  return gulp.src(['spec/**/*.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'list'
    }))
    .on('error', gutil.log);
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch([paths.sources, paths.spec], ['test']);
});

gulp.task('lint', lint);
gulp.task('test', ['lint', 'mocha']);

gulp.task('default', ['test']);
