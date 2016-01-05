"use strict";

var Command = require('./command.js');

var Play = function (user) {
  Command.call(this, 'play', user);

  this.run = function (params) {
    var song = Array.isArray(params) ? params.join(' ') : params;
    this.user.play(song);
    this.user.save();
    return 'Playing ' + song;
  }
}
Play.prototype = Command.prototype;
Play.prototype.constructor = Play;

module.exports = Play;