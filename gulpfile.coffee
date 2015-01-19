gulp        = require 'gulp'
getFiles    = require './getFiles'
config      = require './projects'

tasksBase = getFiles 'base'

tasks = []
for proj of config.projects

    if !config.projects[proj].active then continue

    require('./base/less')(proj)
    require('./base/watch')(proj)

    tasks.push "#{proj}-watch"

gulp.task 'default', tasks
