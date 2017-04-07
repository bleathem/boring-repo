const chai = require('chai')
      broken = require('./broken'),
      serial = require('./serial'),
      parallel = require('./parallel'),
      assert = chai.assert;

describe('broken', function() {
  describe('#remoteMathService', function() {
    it('should fail', function(done) {
      broken.remoteMathService(function(err, answer) {
        assert.isNaN(answer);
        done();
      });
    });
  });
});

describe('serial', function() {
  this.timeout(3000);
  describe('#remoteMathService', function() {
    it('should succeed', function(done) {
      serial.remoteMathService(function(err, answer) {
        if (err) {
          done(err);
        };
        assert.equal(3, answer);
        done();
      });
    });
  });
});

describe('parallel', function() {
  this.timeout(2000);
  describe('#remoteMathService', function() {
    it('should succeed', function(done) {
      parallel.remoteMathService(function(err, answer) {
        if (err) {
          done(err);
        };
        assert.equal(3, answer);
        done();
      });
    });
  });
});