gulp            = require 'gulp'
reload          = require 'gulp-livereload'
less            = require 'gulp-less'
minifycss       = require 'gulp-minify-css'
dialog          = require 'dialog'
plumber         = require 'gulp-plumber'
gutil           = require 'gulp-util'
sourcemaps      = require 'gulp-sourcemaps'
gulpif          = require 'gulp-if'

projects        = require '../projects'

module.exports = (proj) ->

    gulp.task "#{proj}-less", ->
        gulp.src "#{projects[path].less}style.less"

            # ERRORS HANDLER
            .pipe plumber (error) ->
                gutil.log gutil.colors.yellow(error.message)
                # dialog.info error.message
                this.emit 'end'
            # ERRORS HANDLER

           # .pipe gulpif(projects[proj].sourcemaps, sourcemaps.init())
            .pipe less()
            .pipe minifycss()
           # .pipe gulpif(projects[proj].sourcemaps, sourcemaps.write())

            .pipe gulp.dest "#{projects[proj].less}"
            .pipe reload()
