const assert = require('chai').assert;
const evenOrOdd = require('./Task02.js');
const expect = require('chai').expect;

describe('Even or odd string length', (() => {
    it('with a number parameter, should return undefined', function () {
      expect(evenOrOdd(13)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with a object parameter, should return undefined', function () {
      assert.equal(evenOrOdd({name: 'pesho'}), undefined, 'Function did not return correct result!');
    });

    it('with an even length string should return "even"', function () {
      assert.equal(evenOrOdd('roar'), 'even', 'Function did not return correct result!');
    });

    it('with an odd length string, should return "odd"', function () {
      expect(evenOrOdd('pesho')).to.equal('odd', 'Function did not return correct result!');
    });

    it('with multiple consecutive checks, should return correct values', function () {
      expect(evenOrOdd('cat')).to.equal('odd', 'Function did not return correct result!');
      expect(evenOrOdd('alabala')).to.equal('odd', 'Function did not return correct result!');
      expect(evenOrOdd('is it even')).to.equal('even', 'Function did not return correct result!');
    });

  }));