# gulp-kit

Simple gulp task-runner that watches over several projects.
All projects have to be in the same folder though (works fine w/ simlinks) like:
```
/projects-folder/
    project1/
    project2/
    ...
```

You need is to set a config object for each of your projects in projects.js like so
```javascript
projectName: {
    active: true,
    aprefix: 'last 3 versions', /* autoprefixer param -- defaults to 'last 3 versions' if empty */
    img: 'path/to/images/folder/',
    less: 'path/to/less/folder/'
}
```

Note that you need to set a folder name as a key.
