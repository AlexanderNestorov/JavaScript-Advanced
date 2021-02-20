
const {assert} = require('chai');

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe('Tests', function () {
    describe('powNumber',function () {
        it('should work with numbers', function () {
            assert.equal(numberOperations.powNumber(3),9);
        })
        it('should work with double numbers', function () {
            assert.equal(numberOperations.powNumber(3.5),12.25);
        })
        it('should work with 0', function () {
            assert.equal(numberOperations.powNumber(0),0);
        })
        it('should not work with empty input',function () {
            assert.isNaN(numberOperations.powNumber());
        })
        it('should not work with string input',function () {
            assert.isNaN(numberOperations.powNumber('num'));
        })
    })
    describe('numberChecker', function (){
        it('should throw if not number',function () {
            assert.throws(()=> numberOperations.numberChecker(),'The input is not a number!')
        })
        it('should throw if string',function () {
            assert.throws(()=> numberOperations.numberChecker('string'),'The input is not a number!')
        })
        it('should work with lower than 100',function() {
            assert.equal(numberOperations.numberChecker(99),'The number is lower than 100!')
        })
        it('should work with 100',function() {
            assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
        })
        it('should work with bigger 100',function() {
            assert.equal(numberOperations.numberChecker(101),'The number is greater or equal to 100!')
        })
    })
    describe('sumArrays', function () {
        it('should work equal length arrs',function() {
            assert.deepEqual(numberOperations.sumArrays([1,2],[3,4]),[4,6]);
        })
        it('should work different lentgh arrs1',function() {
            assert.deepEqual(numberOperations.sumArrays([1,2],[3,4,5]),[4,6,5]);
        })
        it('should work different lentgh arrs2',function() {
            assert.deepEqual(numberOperations.sumArrays([1],[3,4,5]),[4,4,5]);
        })
        it('should work equal one el',function() {
            assert.deepEqual(numberOperations.sumArrays([1],[3]),[4]);
        })
        
    })
})



