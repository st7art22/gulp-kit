# gulp-kit

Simple gulp task-runner that watches over several projects

All you need is to set a config object for each of your projects in projects.js like so

test: {
    active: true,
    aprefix: 'last 3 versions', /* defaults to 'last 3 versions' if empty */
    img: path/to/images/folder/
    less: path/to/less/folder/
}
