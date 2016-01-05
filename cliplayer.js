#!/usr/bin/env node

var Commander = require('./commander');

var commander = new Commander(process.argv);
console.log(commander.run());






