'use strict'

const fr = require('./ex06module');

const path = process.argv[2];
const extension = process.argv[3];


fr(path, extension, onReadComplete);

function onReadComplete(err, list) {
    if (err)
        console.log(err);
    list.forEach(element => {
        console.log(element);
    });
}