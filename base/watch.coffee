gulp        = require 'gulp'
path        = require 'path'
reload      = require 'gulp-livereload'
gaze        = require 'gaze'
gutil       = require 'gulp-util'
reload      = require 'gulp-livereload'

config      = require '../projects'
projects    = config.projects

module.exports = (proj) ->
    gulp.task "#{proj}-watch", ["#{proj}-less"], ->
        htmlPath = config.baseHtml
        phpPath = config.basePhp

        # CHANGES PROCESS DIR SO GLOB /**/* WORKS FINE
        process.chdir(config.basePath + proj)

        if projects[proj].cssPath isnt undefined
            lessPath = "#{projects[proj].cssPath}"
        else if projects[proj].less is 'dev'
            lessPath = "#{config.baseLessDev}"
        else
            lessPath = "#{config.baseLessDes}"

        # LESS Watcher
        gaze "#{lessPath}**/*.less", {dot: false}, ->
            @on 'changed', ->
                gulp.start "#{proj}-less"

            @on 'added', (filepath) ->
                gutil.log gutil.colors.green "#{path.basename filepath} was added"
                gulp.start "#{proj}-less"
        # LESS Watcher

        # HTML Watcher
        if projects[proj].html
            gaze "#{htmlPath}**/*.html", ->
                @on 'changed', reload.changed
        # HTML Watcher

        # PHP Watcher
        if projects[proj].php
            gaze ["#{phpPath}models/**/*.php", "#{phpPath}controllers/**/*.php", "#{phpPath}views/**/*.phtml"], ->
                @on 'changed', reload.changed
        # PHP Watcher

