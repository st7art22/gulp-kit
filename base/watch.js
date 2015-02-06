var gulp        = require('gulp');
var path        = require('path');
var reload      = require('gulp-livereload');
var gaze        = require('gaze');
var gutil       = require('gulp-util');
var reload      = require('gulp-livereload');

var projects    = require('../projects');

module.exports = function(proj) {
    gulp.task(proj + "-watch", [proj + "-less"], function() {

        // CHANGES PROCESS DIR SO GLOB /**/* WORKS FINE
        process.chdir(projects[proj].base);

        // LESS Watcher
        gaze(projects[proj].less + "**/*.less", {dot: false}, function() {
            this.on('changed', function() {
                gulp.start(proj + "-less");
            });

            this.on('added', function(filepath) {
                gutil.log(gutil.colors.green(path.basename(filepath) + " was added"));
                gulp.start(proj + "-less");
            });
        });
        // LESS Watcher

        // HTML Watcher
        if (projects[proj].html) {
            gaze(htmlPath + "**/*.html", function(){
                this.on('changed', reload.changed);
            });
        }
        // HTML Watcher
    });
};

