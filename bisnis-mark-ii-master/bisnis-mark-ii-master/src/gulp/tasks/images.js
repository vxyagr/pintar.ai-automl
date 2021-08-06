const gulp = require('gulp');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const config = require('../config');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;
const imagePath = config.src.images + '**/*';


gulp.task('images', () => {
    gulp.src(imagePath)
    	.pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(config.dist.images))
        .pipe(notify('Images updated!'))
        .pipe(reload({ stream: true }));
});

gulp.task('images:watch', () => {
	gulp.watch(imagePath, ['images']);
});
