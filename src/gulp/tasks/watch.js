const gulp = require('gulp');
const rimraf = require('rimraf');
const config = require('../config');
const browserSync = require('browser-sync').create();


gulp.task('watch', [
    'fonts:watch',
    'html:watch',
    'images:watch',
    'js:watch',
    'scss:watch'
]);

gulp.task('delete', function(cb) {
    rimraf(config.dist.root, cb);
});

gulp.task('default', ['server', 'watch'], function() {});
gulp.task('build', ['fonts', 'html', 'images', 'js-libs', 'js-app', 'scss'], function() {});
