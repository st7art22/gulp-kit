var gulp            = require('gulp');
var reload          = require('gulp-livereload');
var less            = require('gulp-less');
var minifycss       = require('gulp-minify-css');
var dialog          = require('dialog');
var plumber         = require('gulp-plumber');
var gutil           = require('gulp-util');
var sourcemaps      = require('gulp-sourcemaps');
var gulpif          = require('gulp-if');

var projects        = require('../projects');

module.exports = function(proj) {
    gulp.task(proj + "-less", function() {
        gulp.src(projects[proj].less + "style.less")

            // ERRORS HANDLER
            .pipe(plumber(function(error) {
                // dialog.info error.message
                gutil.log(gutil.colors.yellow(error.message));
                this.emit('end');
            }))
            // ERRORS HANDLER

           // .pipe gulpif(projects[proj].sourcemaps, sourcemaps.init())
            .pipe(less())
            .pipe(minifycss())
           // .pipe gulpif(projects[proj].sourcemaps, sourcemaps.write())

            .pipe(gulp.dest(projects[proj].less))
            .pipe(reload());
    });
}
