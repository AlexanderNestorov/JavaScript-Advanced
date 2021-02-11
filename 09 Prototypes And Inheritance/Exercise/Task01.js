(function solve() {

    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        if (n < 0 || n >= this.length) {
            throw Error('Invalid param')
        }
        let result = [];

        for (let index = n; index < this.length; index++) {
            result.push(this[index]);
        }
        return result;
    };

    Array.prototype.take = function(n) {
        if (n < 0 || n >= this.length) {
            throw Error('Invalid param')
        }
        let result = [];
        for (let index = 0; index < n; index++) {
            result.push(this[index]);
        }
        return result;
    };

    Array.prototype.sum = function() {
        return this.reduce((x, y) => x + y, 0);
    };
    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
}());

