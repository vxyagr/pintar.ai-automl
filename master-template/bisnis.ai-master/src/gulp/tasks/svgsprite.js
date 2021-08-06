// const gulp = require('gulp');
// const notify = require('gulp-notify');
// const svgSprite = require('gulp-svg-sprite');
// const config = require('../config');
// const browserSync = require('browser-sync').create();

// const reload = browserSync.reload;
// const svgConfig = {
//     shape : {
//         dimension : {
//             maxWidth : 32,
//             maxHeight : 32
//         }
//     },
//     mode : {
//         symbol : true
//     }
// };


// gulp.task('svgsprite', () => {
//     gulp.src(config.src.images + 'svgsprite/**/*.svg')
//     	.pipe(svgSprite(svgConfig))
//     	.pipe(gulp.dest(config.dist.images))
//         .pipe(notify('SVG Sprite created!'))
//         .pipe(reload({ stream: true }));
// });
