'use strict'

const net = require('net');

if (!process.argv[2])
return "";

net.createServer(
    onClientConnection
).listen(process.argv[2]);

function onClientConnection(socket) {
    socket.end(getFormattedDate());
}

function getFormattedDate() {
    const date = new Date();
    const month = zeroPadding(date.getMonth() + 1);
    const day = zeroPadding(date.getDate());
    const hour = zeroPadding(date.getHours());
    const min = zeroPadding(date.getMinutes());
    return `${date.getFullYear()}-${month}-${day} ${hour}:${min}\n`;
}

function zeroPadding(num) {
    return num < 10 ? '0' + num : num;
}