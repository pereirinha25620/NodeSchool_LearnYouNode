'use strict'

const http = require('http');
const url = process.argv[2];

const DATA_EVENT = 'data';

http.get(url, response => onDataReceived(response));

function onDataReceived(response) {
    response.setEncoding('utf8')
    .on(
        DATA_EVENT, 
        data => console.log(data)
    );
}