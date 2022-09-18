
var divination = require('./../problems/divination');
var assert = require('assert');


describe('divination', function () {
  describe('success case', function () {
    it('6 -> 12', function () {
      assert.equal(divination(6), 12);
    });
    it('10 -> 18', function () {
      assert.equal(divination(10), 18); 
    });
  });
});
