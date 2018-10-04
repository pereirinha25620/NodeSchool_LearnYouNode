'use strict'

const http = require('http');
const urls = process.argv.slice(2);
let openBuffers = urls.length;
const buffers = {};

urls.forEach(
    url => {
        buffers[url] = "";
        getUrlData(url);
    }
);

function getUrlData(url) {
    http.get(
        url,
        res => {
            res.setEncoding('utf8')
                .on('data', data => buffers[url] += data)
                .on('end', () => --openBuffers)
        }
    )
}

function watchBuffers() {
    setTimeout(
        () => {
            if (openBuffers === 0)
                urls.forEach(url => console.log(buffers[url]))
            else
                watchBuffers();
        },
        50
    )
}
watchBuffers();