var expect = require('chai').expect,
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

      expect((new commands['play'](mockUser)).run('Rock and roll')).to.equal('Playing Rock and roll');
      expect((new commands['play'](mockUser)).run('Comfortably numb')).to.equal('Playing Comfortably numb');
    });
  });

  describe('listened#run()', function () {
    it('should show played song', function () {
      var mockUser = _createMockUser();
      expect((new commands['listened'](mockUser)).run()).to.equal("Listened to Gimmie Shelter\nListened to Born to be wild");
    });
  });
});