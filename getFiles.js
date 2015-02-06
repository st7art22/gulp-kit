var fs  = require('fs');
var _   = require('underscore');

module.exports = function(rootDir) {
    var files = fs.readdirSync(rootDir);

    var tasks = [];

    _.each(files, function(file) {
        if (file.charAt(0) !== '.') {
            var task = file.split('.')[0];
            tasks.push(task);
        }
    });

    return tasks;
};