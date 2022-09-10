
var compare = require('./../problems/compare');
var assert = require('assert');


console.log(compare);

describe('compare', function () {
  describe('success case', function () {
    it('-1 < 1', function () {
      assert.equal(compare(-1, 1), '<');
    });
    it('7 > 5', function () {
      assert.equal(compare(7, 5), '>');
    });
    it('3 = 3', function () {
      assert.equal(compare(3, 3), '=');
    });
  });
});
