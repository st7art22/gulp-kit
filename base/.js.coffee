rt              = require '../../routes'

gulp        = require 'gulp'
coffee      = require 'gulp-coffee'
gutil       = require 'gulp-util'
prettify    = require 'gulp-jsbeautifier'
browserify  = require 'browserify'
source      = require 'vinyl-source-stream'
cached      = require 'gulp-cached'
_           = require 'underscore'
path        = require 'path'

proj        = path.basename __dirname

gulp.task "#{proj}-js", ->
    gulp.src "./#{proj}/#{rt[proj].coffeein}/**/*.coffee"
        .pipe cached 'coffee'
        .pipe(coffee({bare: true}).on 'error', gutil.log)
        .pipe prettify
            mode: 'VERIFY_AND_WRITE'
            js:
                indentChar: ' '
                indentSize: 4
                indentWithTabs: false
                spaceBeforeConditional: true
        .pipe gulp.dest "./#{proj}/#{rt[proj].coffeeout}"

    # _.each ['app'], (src) ->
    #     browserify "./js/controllers/#{src}.js"
    #         .bundle()
    #         .pipe source "#{src}.js"
    #         .pipe gulp.dest './js/bundle/'

