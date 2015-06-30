var gulp        = require('gulp');
var path        = require('path');
var reload      = require('gulp-livereload');
var gaze        = require('gaze');
var gutil       = require('gulp-util');
var reload      = require('gulp-livereload');
var _           = require('underscore');
var assign      = require('object-assign');

var projects    = require('../projects');

module.exports = function(proj) {
    var start = [proj + "-less"];

    if (projects[proj].img) {
        start.push(proj + "-img");
    }

    gulp.task(proj + "-watch", start, function() {
        var gazeParams = {cwd: projects[proj].base};

        // LESS Watcher
        gaze(projects[proj].less + "**/*.less", gazeParams, function() {
            this.on('changed', function() {
                gulp.start(proj + "-less");
            });
            this.on('added', function(filepath) {
                gutil.log(gutil.colors.green(path.basename(filepath) + " was added"));
                gulp.start(proj + "-less");
            });
        });

        // IMG Watcher
        if (projects[proj].img) {
            gaze(projects[proj].img + "**/*.png", gazeParams, function(error){
                this.on('added', function(filepath) {
                    gutil.log(gutil.colors.green(path.basename(filepath) + " was added"));
                    gulp.start(proj + "-img");
                });
            });
        }
    });
};

