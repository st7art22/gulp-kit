gulp        = require 'gulp'
getFiles    = require './getFiles'
projects    = require './projects'
_           = require 'underscore'

tasksBase = getFiles 'base'

tasks = []
for proj of projects
    require('./base/less')(proj)
    require('./base/watch')(proj)
    tasks.push "#{proj}-watch"

gulp.task 'default', tasks
