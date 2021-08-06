const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config');


gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: config.dist.root
        },
        files: [config.dist.root + '*.html', config.dist.css + '*.css', config.dist.js + '*.js'],
        port: 9000,
        notify: false,
        ghostMode: false,
        online: false,
        open: true
    });
});