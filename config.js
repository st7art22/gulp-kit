var _        = require('underscore');
var projects = require('./projects');

var basePath = 'C:/web/';
var active   = {};

_.each(projects, function(proj, name) {
    if (!proj.active) return;

    active[name]      = proj;
    active[name].base = basePath + name + '/';
});

module.exports = {projects: active};


