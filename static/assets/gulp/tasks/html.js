const gulp = require('gulp');
const include = require('gulp-include');
const notify = require('gulp-notify');
const config = require('../config');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;


gulp.task('html', () => {
    gulp.src(config.src.root + '*.html')
    	.pipe(include())
    	.on('error', function() { notify("HTML include error!"); })
    	.pipe(gulp.dest(config.dist.root))
        .pipe(notify('HTML updated!'))
        .pipe(reload({ stream: true }));
});

gulp.task('html:watch', () => {
	gulp.watch([
		config.src.root + '*.html',
		config.src.root + 'includes/*.html'
	], ['html']);
});
