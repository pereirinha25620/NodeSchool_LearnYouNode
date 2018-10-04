'use strict'

const fs = require('fs');
const path = require('path');

function readDirFiles(dirPath, extension, cb) {
    const ext = '.' + extension;
    
    fs.readdir(
        dirPath,
        (err, list) => {
            if (err)
                return cb(err);
            
            cb(null, list.filter(file => path.extname(file) === ext));
        }
    );

};

module.exports = readDirFiles;