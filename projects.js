var _ = require('underscore');

var basePath    = 'C:/proj/';
var baseHtml    = 'trunk/design/markup/';
var basePhp     = 'trunk/www/local/zend/';
var baseLessDev = 'trunk/www/local/css/';
var baseLessDes = 'trunk/design/markup/css/';

var projects = {
    handy: {
        active: false,
        less: 'dev'
    },

    proburo: {
        active: false,
        less: 'dev'
    },

    napopravku: {
        active: false,
        cssPath: 'local/css/'
    },

    europatrc: {
        active: false,
        less: 'dev'
    },

    razv: {
        active: false,
        less: 'dev'
    },

    ralf: {
        active: true,
        cssPath: 'branches/development/www/local/css/',
        less: 'dev'
    }
};

var active = {};
_.each(projects, function(proj, name) {
    if (!proj.active) return;

    var base = basePath + name + '/',
        path,
        html;

    if (proj.cssPath !== undefined) {
        path = base + proj.cssPath;
    }
    else if (proj.less === 'dev') {
        path = base + baseLessDev;
    }
    else {
        path = base + baseLessDes;
    }

    if (proj.html !== undefined && proj.html) {
        html = baseHtml;
    }
    else {
        html = false;
    }

    active[name] = {
        base: base,
        html: html,
        less: path
    };
});


module.exports = active;


