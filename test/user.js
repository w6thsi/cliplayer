var expect = require('chai').expect,
    User = require('../user').User;

describe('User', function() {
  var mockDb = function () {
    this.obj = { username: 'Test', played: [], following: [] }
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

  describe('#play()', function () {
    it('should play song', function () {
      var user = _createMockUser();
      expect(user.play('Born to be wild').played[0]).to.equal('Born to be wild');
      expect(user.play('Gimmie Shelter').played[1]).to.equal('Gimmie Shelter');
    });
  });

  describe('#follow()', function () {
    it('should follow user', function () {
      var user = _createMockUser();
      expect(user.follow('Brian').following[0], 'Brian');
      expect(user.follow('Terry').following[1], 'Terry');
    });
  });
});