



class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20;      // Default value    
    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('Name must be a non-empty string');
    }
    if (newValue.length === 0) {
      throw new Error('Name must be a non-empty string');
    }
    this._name = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('Value must be a non-negative number');
    }
    this._value = newValue;
  }

  get VAT() {
    return this._VAT;
  }

  set VAT(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('VAT must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('VAT must be a non-negative number');
    }
    this._VAT = newValue;
  }

  get active() {
    return this._active;
  }

  set active(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new Error('Active status must be a boolean');
    }
    this._active = newValue;
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
    ];
    return output.join('\n');
  }
}

const expect = require('chai').expect;
const assert = require('chai').assert;

describe("PaymentPackage", () => {
    describe("Test name", () => {
        it("1 => Error", () => {
            expect(() => new PaymentPackage(1, 1)).to.Throw('Name must be a non-empty string');
        });
        it("'' => Error", () => {
            expect(() => new PaymentPackage('', 1)).to.Throw('Name must be a non-empty string');
        })
        it("test => test", () => {
            let newObj = new PaymentPackage('test', 1);
            expect(newObj.name).to.equal('test');
        });
        it("newName => newName", () => {
            let newObj = new PaymentPackage('test', 1);
            expect(newObj.name = 'newName').to.equal('newName');
        });
    });
    describe("Test value", () => {
        it("a => Error", () => {
            expect(() => new PaymentPackage('a', 'a')).to.Throw('Value must be a non-negative number');
        });
        it("-1 => Error", () => {
            expect(() => new PaymentPackage('a', -1)).to.Throw('Value must be a non-negative number');
        });
        it("1 => 1", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.value).to.equal(1);
        });
        it("2 => 2", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.value = 2).to.equal(2);
        });
    });
    describe("Test VAT", () => {
        it("'' => 20", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.VAT).to.equal(20);
        });
        it("a => Error", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.VAT = 'a').to.Throw('VAT must be a non-negative number');
        })
        it("-1 => Error", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.VAT = -1).to.Throw('VAT must be a non-negative number');
        });
        it("1 => 1", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.VAT = 1).to.equal(1);
        });
    });
    describe("Test active", () => {
        it("'' => true", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.active).to.equal(true);
        });
        it("test => Error", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.active = 'test').to.Throw('Active status must be a boolean');
        });
        it("false => false", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.active = false).to.equal(false);
        });
    });
    describe("Test toString", () => {
        it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 1500);
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
        it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.active = false;
            expect(newObj.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
        it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.VAT = 0;
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500');
        });
        it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 0);
            newObj.VAT = 0;
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
        });
    });
});