#!/usr/bin/env node
'use strict';

var yargs = require('yargs');

if (yargs.argv._.length < 1) {
  console.error('usage: browserify-transform-cli nameOfTransform < input.js > output.js');
  process.exit(1);
}

var stream = process.stdin;
for (var i = 0; i < yargs.argv._.length; i++) {
  var transform = require(yargs.argv._[i]);
  stream = stream.pipe(transform());
}
stream.pipe(process.stdout);
