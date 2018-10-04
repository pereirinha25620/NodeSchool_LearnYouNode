'use strict'

const http = require('http');
const url = process.argv[2];

const DATA_EVENT = 'data';
const END_EVENT = 'end';

let buffer = "";

http.get(
    url,
    onDataReceived
);

function onDataReceived(res) {
    res.setEncoding('utf8')
    .on(DATA_EVENT, data => buffer += data)
    .on(END_EVENT, () => {
        console.log(buffer.length);
        console.log(buffer);
    });
}
