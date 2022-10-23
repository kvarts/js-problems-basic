
var fishnet = require('./../problems/fishnet');
var assert = require('assert');


describe('fishnet', function () {
  describe('success case', function () {
    it('2, 2 -> 1', function () {
      assert.equal(fishnet(2, 2), 1);
    });
    it('2, 3 -> 2', function () {
      assert.equal(fishnet(2, 3), 2);
    });
    it('3, 3 -> 4', function () {
      assert.equal(fishnet(2, 2), 4);
    });
  });
});
