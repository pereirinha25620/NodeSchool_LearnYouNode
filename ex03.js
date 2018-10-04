'use strict'

const fs = require('fs');

const fileData = fs.readFileSync(process.argv[2], 'utf8').split('');
console.log(
    fileData.filter( e => e === '\n').length
);