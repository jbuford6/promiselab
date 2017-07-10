'use strict'

function attachTitle(name) {
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

p
.then(attachTitle)
.then(console.log);