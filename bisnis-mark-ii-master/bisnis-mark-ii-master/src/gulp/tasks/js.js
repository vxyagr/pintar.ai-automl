const gulp = require('gulp');
const include = require('gulp-include');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const config = require('../config');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;


gulp.task('js-libs', () => {
    gulp.src(config.src.js + 'libs.js')
        .pipe(include())
        .on('error', function() { notify("Javascript libs include error!"); })
        .pipe(concat('libs.js'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(config.dist.js))
        .pipe(notify('Javascript libs updated!'))
        .pipe(reload({ stream: true }));
});

gulp.task('js-app', () => {
    gulp.src(config.src.js + 'partials.js')
        .pipe(include())
        .on('error', function() { notify("Javascript app include error!"); })
        .pipe(concat('app.js'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(config.dist.js))
        .pipe(notify('Javascript app updated!'))
        .pipe(reload({ stream: true }));
});

gulp.task('js:watch', () => {
    gulp.watch(config.src.js + 'libs.js', ['js-libs']);
    gulp.watch(config.src.js + 'partials.js', ['js-app']);
});
