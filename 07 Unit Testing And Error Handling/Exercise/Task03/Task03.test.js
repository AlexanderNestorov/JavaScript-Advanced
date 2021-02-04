const lookupChar = require('./Task03.js');
const assert = require('chai').assert;


describe('charLookup', () => {
    it('with non-string first argument', () => {
        assert.equal(lookupChar(13,0),undefined,'The function did not work as expected');
    })

    it('with non-number second argument', () => {
        assert.equal(lookupChar('Pesho','Gosho'),undefined,'The function did not work as expected');
    })

    it('with non-integer second argument', () => {
        assert.equal(lookupChar('Pesho',3.12),undefined,'The function did not work as expected');
    })

    it('with invalid index', () => {
        assert.equal(lookupChar('Pesho',13),'Incorrect index','The function did not work as expected');
    })

    it('with negative index', () => {
        assert.equal(lookupChar('Pesho',-1),'Incorrect index','The function did not work as expected');
    })

    it('with index equal to string length', () => {
        assert.equal(lookupChar('Pesho',5),'Incorrect index','The function did not work as expected');
    })

    it('should work', () => {
        assert.equal(lookupChar('Pesho',0),'P','The function did not work as expected');
    })

    it('should work', () => {
        assert.equal(lookupChar('Pesho',3),'h','The function did not work as expected');
    })
})