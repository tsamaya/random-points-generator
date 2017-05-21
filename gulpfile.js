const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-mocha');


const paths = {
  sources: ['lib/**/*.js', '*.js'],
  spec: ['spec/**/*.js'],
};

function lint() {
  return gulp.src(['lib/**/*.js', 'spec/**/*.js', '*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    // Break on failure to be super strict
    .pipe(eslint.failOnError());
}

function testMocha() {
  return gulp.src(['spec/**/*.js'], {
    read: false,
  }).pipe(mocha({
    reporter: 'list',
  })).on('error', gutil.log);
}

gulp.task('mocha', testMocha);

// Rerun the task when a file changes
gulp.task('watch', () => {
  gulp.watch([paths.sources, paths.spec], ['test']);
});

gulp.task('lint', lint);
gulp.task('test', ['lint', 'mocha']);

gulp.task('default', ['test']);
