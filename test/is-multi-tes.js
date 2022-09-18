
var isMulti = require('./../problems/is-multi');
var assert = require('assert');

// isMulti(4, 5, 20) == true
// isMulti(1, 4, 4) == true
// isMulti(4, 3, 13) == false

describe('is-multi', function () {
  describe('success case', function () {
    it('4, 5, 20 -> true', function () {
      assert.equal(isMulti(4, 5, 20), true);
    });
    it('1, 4, 4 -> true', function () {
      assert.equal(isMulti(1, 4, 4), true);
    });
    it('4, 3, 13 -> false', function () {
      assert.equal(isMulti(4, 3, 13), false); 
    });
  });
});
