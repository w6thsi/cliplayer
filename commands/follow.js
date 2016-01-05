"use strict";

var Command = require('./command.js');

var Follow = function (user) {
  Command.call(this, 'follow', user);

  this.run = function (params) {
    var username = (params instanceof Array) ? params[0] : params;
    this.user.follow(username);
    this.user.save();
    return this.user.username + ' is now following ' + username;
  }
}
Follow.prototype = Command.prototype;
Follow.prototype.constructor = Follow;

module.exports = Follow;