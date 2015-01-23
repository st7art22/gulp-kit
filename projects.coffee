_ = require 'underscore'

basePath = 'C:/web/proj/domains/'
# basePath = 'C:/proj/'
baseHtml = 'trunk/design/markup/'
basePhp = 'trunk/www/local/zend/'
baseLessDev = 'trunk/www/local/css/'
baseLessDes = 'trunk/design/markup/css/'

projects =
    ortodont:
        active: true
        less: 'des'

# Setting up routes and active projects object
# 32123123
active = {}
_.each projects, (proj, name) ->
    if !proj.active then return

    base = basePath + name + '/'
    if proj.cssPath isnt undefined
        path = base + proj.cssPath
    else if proj.less is 'dev'
        path = base + baseLessDev
    else
        path = base + baseLessDes

    if proj.html isnt undefined and proj.html
        html = baseHtml
    else
        html = false

    if proj.php isnt undefined and proj.php
        php = basePhp
    else
        php = false

    active[name] =
        base: base
        html: html
        php: php
        less: path

module.exports = active


