'use strict'

console.log(
    process.argv
        .slice(2)
        .reduce(
            (acc, cur) => acc + +cur,
            0
        )
);