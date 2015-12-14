var locker = require('../');
var expect = require('chai').expect;

describe('Test locker', function() {

  it('Should successfully lock something', function(done) {
    locker.lock('test');

    if (locker.isLocked('test')) {
      done();
    } else {
      done('This should have been locked');
    }

  });

  it('Should unlock something', function(done) {
    locker.lock('test');

    if (locker.isLocked('test')) {
      locker.unlock('test');
      if (locker.isLocked('test')) {
        done('This should have been unlocked');
      } else {
        done();
      }
    }
  });
});

