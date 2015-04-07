var gulp        = require('gulp');
var getFiles    = require('./getFiles');
var projects    = require('./projects');
var _           = require('underscore');

console.log(projects);

var tasksBase = getFiles('base');

var tasks = [];

_.each(projects, function(i, proj) {
    require('./base/less')(proj);
    require('./base/watch')(proj);

    if (projects[proj].img) {
        require('./base/img')(proj);
    }

    tasks.push(proj + "-watch");
});

gulp.task('default', tasks);
