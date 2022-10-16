
var cake = require('./../problems/cake');
var assert = require('assert');


describe('cake', function () {
  describe('success case', function () {
    it('2 -> 1', function () {
      assert.equal(cake(2), 1);
    });
    it('3 -> 3', function () {
      assert.equal(cake(3), 3);
    });
    it('1 -> 0', function () {
      assert.equal(cake(1), 0);
    });
  });
});
