var gulp        = require('gulp');
var reload      = require('gulp-livereload');
var less        = require('gulp-less');
var minifycss   = require('gulp-minify-css');
var dialog      = require('dialog');
var plumber     = require('gulp-plumber');
var gutil       = require('gulp-util');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');

var projects    = require('../projects');

module.exports = function(proj) {
    var path = projects[proj].base + projects[proj].less;
    gulp.task(proj + "-less", function() {
        gulp.src(path + "style.less")

            .pipe(plumber(function(error) {
                // dialog.info error.message
                gutil.log(gutil.colors.yellow(error.message));
                this.emit('end');
            }))

            .pipe(less())
            .pipe(prefix(['last 3 versions']))
            .pipe(minifycss())

            .pipe(gulp.dest(path))
            .pipe(reload());
    });
};
