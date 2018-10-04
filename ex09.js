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
            if (openBuffers === 0) {
                for (let buffer in buffers)
                    console.log(buffers[buffer])
            }
            else
                watchBuffers();
        },
        50
    )
}
watchBuffers();