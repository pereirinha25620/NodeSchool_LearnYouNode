'use strict'

const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = '.' + process.argv[3];

fs.readdir(dirPath, onDirReadingComplete);

function onDirReadingComplete(err, list) {
    if (err)
        throw 'Unable to read directory';

    list.filter(file => path.extname(file) === fileExt)
        .forEach( f => console.log(f));
}