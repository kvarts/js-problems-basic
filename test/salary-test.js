
var salary = require('./../problems/salary');
var assert = require('assert');


console.log(compare);

describe('salary', function () {
  describe('success case', function () {
    it('100, 500, 1000 -> 900', function () {
      assert.equal(salary(100, 500, 1000), 900);
    });
    it('36, 11, 20 -> 25', function () {
      assert.equal(salary(36, 11, 20), 25);
    });
    it('1, 1, 1 -> 0', function () {
      assert.equal(salary(1, 1, 1), 0); 
    });
    it('10, 10, 100 -> 90', function () {
      assert.equal(salary(10, 10, 100), 90); 
    });
  });
});
