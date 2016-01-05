"use strict";

var User = function (db, obj) {
  this.username = obj.username;
  this.played = obj.played;
  this.following = obj.following;
  this.db = db;
}

User.prototype.play = function (song) {
  this.played.push(song);
  return this;
}

User.prototype.follow = function (username) {
  if (this.following.indexOf(username)===-1) {
    this.following.push(username);
  }
  return this;
}

User.prototype.save = function () {
  this.db.saveSync(this.username, {
    username: this.username,
    played: this.played,
    following: this.following });
  return this;
}

module.exports = User;