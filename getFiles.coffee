fs = require 'fs'

module.exports = (rootDir) ->
    files = fs.readdirSync(rootDir)

    tasks = []
    for file in files

        if file.charAt(0) isnt '.'
            task = file.split('.')[0]
            tasks.push task

    tasks