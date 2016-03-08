browserify-transform-cli
======

Use any Browserify transform as a CLI, which reads from stdin and writes to stdout.

Example:

```
npm install -g browserify-transform-cli 
npm install --save-dev es3ify

browserify-transform-cli es3ify < input.js > output.js
```

Usage:

```
browserify-transform-cli nameOfTransform < input.js > output.js
```
