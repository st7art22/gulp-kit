var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache    = require('gulp-cached');

var config   = require('../config');
var projects = config.projects;

module.exports = function(proj) {
    var path = projects[proj].base + projects[proj].img;

    gulp.task(proj + "-img", function() {
        gulp.src(path + '**/*.png')
            .pipe(cache('min'))
            .pipe(imagemin({use: [pngquant()]}))
            .pipe(gulp.dest(path));
    });
}
