const path = require("path");
const Builder = require('systemjs-builder');
const shelljs = require("shelljs");
const open = require("open");

function bundle() {
    var builder = new Builder('/', 'systemjs.config.js');

    return builder
        .bundle('app/main.js', 'bundle.js', {minify: true})
        .then(function () {
            console.log('Build complete');
        });
}

function compileTS() {
    shelljs.exec("node_modules\\.bin\\tsc");

    return Promise.resolve();
}

function compileSASS() {
    shelljs.exec("node_modules\\.bin\\node-sass .\\app --recursive --output .\\app");

    return Promise.resolve();
}

function runServer() {
    shelljs.exec("node_modules\\.bin\\http-server", {async: true});

    return Promise.resolve();
}

function runBrowser() {
    open("http://localhost:8080/index.html");

    return Promise.resolve();
}

function dev() {
    return Promise.resolve()
        .then(compileTS)
        .then(compileSASS)
        .then(bundle)
        .then(runServer)
        .then(runBrowser);
}

module.exports = {
    dev: dev,
}