"use strict";

var Command = require('./command.js');
var getUser = require('../user').getUser;

var Activity = function (user) {
  Command.call(this, 'activity', user);

  this.run = function () {
    var activities = [];
    if (this.user.following && this.user.following instanceof Array) {
      for (var u in this.user.following) {
        var user = getUser(this.user.following[u]);

        user.played.forEach(function (song) {
          activities.push(user.username + " listened to " + song);
        });

      }
    }
    return activities.join("\n");
  }
}
Activity.prototype = Command.prototype;
Activity.prototype.constructor = Activity;

module.exports = Activity;