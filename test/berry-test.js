
var berry = require('./../problems/berry');
var assert = require('assert');


describe('berry', function () {
  describe('success case', function () {
    it('3, 2, 1 -> 4', function () {
      assert.equal(berry(3, 2, 1), 4);
    });
    it('12, 13, 5 -> 20', function () {
      assert.equal(berry(12, 13, 5), 20);
    });
    it('2, 5, 9 -> false', function () {
      assert.equal(berry(2, 5, 9), false); 
    });
  });
});
