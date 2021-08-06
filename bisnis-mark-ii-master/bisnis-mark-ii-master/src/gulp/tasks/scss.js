const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const notify = require('gulp-notify');
const mqpacker = require('css-mqpacker');
const config = require('../config');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('scss', () => {

    const processors = [
        autoprefixer({ browsers: ['last 10 versions'], cascade: false }),
        mqpacker({
            sort: function(a, b) {
                a = a.replace(/\D/g, '');
                b = b.replace(/\D/g, '');
                return a-b;
                // replace this with a-b for Mobile First approach
            }
        })
    ];

    return sass(config.src.scss + '**/*.scss', {
            sourcemap: true,
            style: 'compressed',
            emitCompileError: true
        })
        .on('error', notify.onError({
            title: 'Sass Error!',
            message: '<%= error.message %>'
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist.css))
        .pipe(notify('CSS updated!'))
        .pipe(reload({ stream: true }));
});

gulp.task('scss:watch', () => {
    gulp.watch(config.src.scss + '**/*.scss', ['scss']);
});
