#!/usr/bin/env node
'use strict';

var yargs = require('yargs');

if (yargs.argv._.length !== 1) {
  console.error('usage: browserify-transform-cli nameOfTransform < input.js > output.js');
  process.exit(1);
}

var transform = require(yargs.argv._[0]);
process.stdin.pipe(transform()).pipe(process.stdout);
