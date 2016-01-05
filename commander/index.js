"use strict";

var commands = require('../commands');
var User = require('../User');

var Commander = function (args) {
  this.args = args;
}

Commander.prototype.args = [];

Commander.prototype.run = function () {

  if (this.args.length < 3) {
    return "Not enough arguments!";
  }

  var username = this.args[2] || null;
  var commandName = this.args[3] || 'listened';
  var params = (this.args.length > 4) ? this.args.slice(4) : null;
  if (!username) {
    return "User not specified";
  }

  var user = User.getUser(username);
  return commands[commandName] ?
        (new commands[commandName](user)).run(params) : "Not a valid command!";
}

module.exports = Commander;