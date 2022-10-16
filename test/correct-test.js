
var correct = require('./../problems/correct');
var assert = require('assert');


describe('correct', function () {
  describe('success case', function () {
    it('3, 5, 2 -> true', function () {
      assert.equal(correct(3, 5, 2), true);
    });
    it('2, 2, 5 -> false', function () {
      assert.equal(correct(2, 2, 5), false);
    });
    it('2, 2, 4 -> true', function () {
      assert.equal(correct(2, 2, 4), true);
    });
  });
});
