"use strict";

var Command = require('./command.js');

var Listened = function (user) {
  Command.call(this, 'listened', user);

  this.run = function () {
    if (this.user.played.length===0) {
      return '';
    }
    return 'Listened to ' + this.user.played[this.user.played.length - 1];
  }
}
Listened.prototype = Command.prototype;
Listened.prototype.constructor = Listened;

module.exports = Listened;