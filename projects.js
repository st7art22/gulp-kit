var lessPathFirst  = 'path/to/less/';
var lessPathSecond = 'path/to/less-2/';

var imgPathFirst  = 'path/to/img/';
var imgPathSecond = 'path/to/img-2/';

module.exports = {
    test: {
        active: true,
        aprefix: 'last 3 versions', /* defaults to 'last 3 versions' if empty */
        img: false, /* path/to/images/folder/ */
        less: lessPathFirst /*path/to/less/folder/*/
    }
};