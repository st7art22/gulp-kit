var _ = require('underscore');

var basePath    = 'C:/proj/';
var baseLessDev = 'trunk/www/local/css/';
var baseLessDes = 'trunk/design/markup/css/';
var imgDes      = 'trunk/design/markup/images/';
var imgDev      = 'trunk/www/local/images/';

var projects = {
    test: {
        active: false,
        less: 'dev'
    }
};

var active = {};
_.each(projects, function(proj, name) {
    if (!proj.active) return;

    active[name] = {};
    active[name].base = basePath + name + '/';

    if (proj.cssPath !== undefined) {
        active[name].less = proj.cssPath;
    }
    else if (proj.less === 'dev') {
        active[name].less = baseLessDev;
    }
    else {
        active[name].less = baseLessDes;
    }

    if (proj.img === 'dev') {
        active[name].img = imgDev;
    } else if(proj.img === 'des') {
        active[name].img = imgDes;
    }
});


module.exports = active;


