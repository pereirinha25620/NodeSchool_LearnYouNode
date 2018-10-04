'use strict'

const fs = require('fs');

fs.readFile(
    process.argv[2],
    'utf-8',
    onFileReadComplete
);

/* On async file reading completion, process the data */
function onFileReadComplete(err, data) {
    if (err)
        throw 'File reading failed because of unexpected reason!';
    
    console.log( data.split('').filter(isNewLinePredicate).length );
}

function isNewLinePredicate(c) {
    return c === '\n';
}