
var season = require('./../problems/season');
var assert = require('assert');


describe('season', function () {
  describe('success case', function () {
    it('3 -> Spring', function () {
      assert.equal(season(3), 'Spring');
    });
    it('12 -> Winter', function () {
      assert.equal(season(12), 'Winter');
    });
    it('9 -> Autumn', function () {
      assert.equal(season(8), 'Autumn');
    });
    it('7 -> Summer', function () {
      assert.equal(season(7), 'Summer');
    });
    it('15 -> false', function () {
      assert.equal(season(15), false); 
    });
  });
});
