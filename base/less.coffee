gulp            = require 'gulp'
reload          = require 'gulp-livereload'
less            = require 'gulp-less'
minifycss       = require 'gulp-minify-css'
path            = require 'path'
dialog          = require 'dialog'
plumber         = require 'gulp-plumber'
gutil           = require 'gulp-util'
sourcemaps      = require 'gulp-sourcemaps'
gulpif          = require 'gulp-if'

config          = require '../projects'
projects        = config.projects

module.exports = (proj) ->
    path = config.basePath + proj + '/'

    if projects[proj].cssPath isnt undefined
        path += projects[proj].cssPath

    else if projects[proj].less is 'dev'
        path += config.baseLessDev

    else
        path += config.baseLessDes

    console.log(path);

    gulp.task "#{proj}-less", ->
        gulp.src "#{path}style.less"

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

            .pipe gulp.dest "#{path}"
            .pipe reload()
