var _ = require('underscore');

var basePath    = 'C:/web/';
var baseLessDev = 'trunk/www/local/css/';
var baseLessDes = 'trunk/design/markup/css/';
var imgDes      = 'trunk/design/markup/images/';

var projects = {
    test: {
        active: true,
        less: 'des',
        img: true
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

    if (proj.img) {
        active[name].img = imgDes;
    };
});


module.exports = active;


