var gulp      = require('gulp');
var reload    = require('gulp-livereload');
var less      = require('gulp-less');
var minifycss = require('gulp-minify-css');
var dialog    = require('dialog');
var plumber   = require('gulp-plumber');
var gutil     = require('gulp-util');
var prefix    = require('gulp-autoprefixer');

var config   = require('../config');
var projects = config.projects;

module.exports = function(proj) {
    var path         = projects[proj].base + projects[proj].less;
    var prefixConfig = projects[proj].aprefix ? projects[proj].aprefix : 'last 3 versions';

    gulp.task(proj + "-less", function() {
        gulp.src(path + "style.less")

            //Error handling
            .pipe(plumber(function(error) {
                //dialog.warn(error.message);
                gutil.log(gutil.colors.yellow(error.message));
                this.emit('end');
            }))

            .pipe(less())
            .pipe(prefix(prefixConfig))
            .pipe(minifycss())
            .pipe(gulp.dest(path))
            .pipe(reload());
    });
};
