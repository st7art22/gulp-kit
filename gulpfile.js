var gulp     = require('gulp');
var config   = require('./config');
var _        = require('underscore');

var projects = config.projects;

console.log(projects);

var tasks = [];
_.each(projects, function(i, proj) {
    require('./base/less')(proj);
    require('./base/watch')(proj);

    if (projects[proj].img) { require('./base/img')(proj); }

    tasks.push(proj + "-watch");
});

gulp.task('default', tasks);
