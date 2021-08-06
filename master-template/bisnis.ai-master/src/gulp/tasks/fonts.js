const gulp = require('gulp');
const notify = require('gulp-notify');
const config = require('../config');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;


gulp.task('fonts', () => {
    gulp.src(config.src.fonts + '**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest(config.dist.fonts))
        .pipe(notify('Fonts copied!'))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:watch', () => {
	gulp.watch(config.src.fonts + '**/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
});
