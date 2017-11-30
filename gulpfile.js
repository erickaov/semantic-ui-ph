// Core
var gulp = require('gulp');

// Server
var connect = require('gulp-connect');

// Launch Server
gulp.task('connect', function () {
  connect.server({
    port: 8000,
    root: "src"
  });
});

gulp.task('default', ['connect']);