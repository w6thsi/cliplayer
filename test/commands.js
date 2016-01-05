var assert = require('assert'),
    commands = require('../commands'),
    User = require('../User').User;

describe('Commands', function() {
  var mockDb = function () {
    this.obj = { username: 'Test', played: ['Gimmie Shelter', 'Born to be wild'], following: [] }
  }
  mockDb.prototype.obj = {};
  mockDb.prototype.saveSync = function (key, obj) {
    mockDb.obj = obj;
  }
  mockDb.prototype.getSync = function (key) {
    return this.obj;
  }

  function _createMockUser() {
    var db = new mockDb();
    return new User(db, db.obj);
  }

  describe('play#run()', function () {
    it('should play song', function () {
      var mockUser = _createMockUser();
      assert.equal('Playing Rock and roll', (new commands['play'](mockUser)).run('Rock and roll'));
      assert.equal('Playing Comfortably numb', (new commands['play'](mockUser)).run('Comfortably numb'));
    });
  });

  describe('listened#run()', function () {
    it('should show played song', function () {
      var mockUser = _createMockUser();
      assert.equal('Listened to Born to be wild', (new commands['listened'](mockUser)).run());
    });
  });
});