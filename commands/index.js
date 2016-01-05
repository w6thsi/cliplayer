"use strict";

var commandList = ['play', 'follow', 'activity', 'listened'];
module.exports = function () {
  var commands = [];
  commandList.forEach(function (command) {
    commands[command] = require('./'+command+'.js');
  });
  return commands;
}();

