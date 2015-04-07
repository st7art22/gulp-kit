var gulp            = require('gulp');
var imagemin        = require('gulp-imagemin');
var pngquant        = require('imagemin-pngquant');

var projects        = require('../projects');

module.exports = function(proj) {
    var path = projects[proj].base + projects[proj].img;

    gulp.task(proj + "-img", function() {
        gulp.src(path + '**/*.png')
            .pipe(imagemin({
                progressive: true,
                use: [pngquant()]
            }))
            .pipe(gulp.dest(path));
    });
}
