gulp        = require 'gulp'
path        = require 'path'
reload      = require 'gulp-livereload'
gaze        = require 'gaze'
gutil       = require 'gulp-util'

projects    = require '../projects'

module.exports = (proj) ->
    gulp.task "#{proj}-watch", ["#{proj}-less"], ->

        # CHANGES PROCESS DIR SO GLOB /**/* WORKS FINE
        process.chdir(projects[proj].base)

        # LESS Watcher
        gaze "#{projects[proj].less}**/*.less", {dot: false}, ->
            @on 'changed', ->
                gulp.start "#{proj}-less"

            @on 'added', (filepath) ->
                gutil.log gutil.colors.green "#{path.basename filepath} was added"
                gulp.start "#{proj}-less"
        # LESS Watcher

        # HTML Watcher
        if projects[proj].html
            gaze "#{projects[proj].html}**/*.html", ->
                @on 'changed', reload.changed
        # HTML Watcher

        # PHP Watcher
        if projects[proj].php
            gaze ["#{projects[proj].php}models/**/*.php", "#{projects[proj].php}controllers/**/*.php", "#{projects[proj].php}views/**/*.phtml"], ->
                @on 'changed', reload.changed
        # PHP Watcher

