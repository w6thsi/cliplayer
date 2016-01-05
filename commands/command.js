"use strict";

var Command = function (name, user) {
  this.name = name;
  this.user = user;

  // Make 'name' property immutable
  Object.defineProperty(this, 'name', {
    writable: false,
    configurable: false
  });
}

Command.prototype.name = null;

Command.prototype.user = null;

Command.prototype.run = function (params) { console.log('Needs to be implemented in the command object.'); }

module.exports = Command;