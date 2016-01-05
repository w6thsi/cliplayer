"use strict";

var Store = require('jfs');
var db = new Store('data');
var User = require('./user.js');

var getUser = function (username) {
  var userObj = db.getSync(username);

  if (userObj.toString()==='Error: could not load data') {
    // Create User
    userObj = { username: username, played: [], following: [] };
  }
  return new User(db, userObj);
}

module.exports.getUser = getUser;
module.exports.User = User;
