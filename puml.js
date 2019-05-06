#!/usr/bin/env node

const spawn = require('child_process').spawnSync;
const path = require('path');
const bin = path.resolve(__dirname, './node_modules/puml/src/puml.js')
const uml = path.resolve(__dirname, './uml/*.puml');
const svg = path.resolve(__dirname, './svg/');
console.log(spawn('node', [bin, '-tsvg', uml, '-o', svg]).stdout.toString());