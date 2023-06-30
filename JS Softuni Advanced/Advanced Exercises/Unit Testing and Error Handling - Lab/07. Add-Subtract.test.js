let createCalculator = require('./07. Add-Subtract');
let expect = require('chai').expect;

describe('createCalculator func TESTS', () => {
    it('The returned obj should contain func add,substract,get', () => {
        let calculator = createCalculator();

        expect(calculator).to.have.property('add');
        expect(calculator).to.have.property('subtract');
        expect(calculator).to.have.property('get');
    });

    it('Check if get func work', () => {
        let calculator = createCalculator();
        let expectedValue = 0;

        let actualValue = calculator.get();

        expect(actualValue).to.equal(expectedValue);

    });

    it('Check if add,substract,get func work', () => {
        let calculator = createCalculator();
        let expectedValue1 = 0;
        let expectedValue2 = 5;
        let expectedValue3 = 8;
        let expectedValue4 = 2;

        let actualValue1 = calculator.get();
        calculator.add(5);
        let actualValue2 = calculator.get();
        calculator.add('3');
        let actualValue3 = calculator.get();
        calculator.subtract(2);
        calculator.subtract('4');
        let actualValue4 = calculator.get();

        expect(actualValue1).to.equal(expectedValue1);
        expect(actualValue2).to.equal(expectedValue2);
        expect(actualValue3).to.equal(expectedValue3);
        expect(actualValue4).to.equal(expectedValue4);

    });

    it('Should not be able to change internal sum', () => {
        let expectedValue = 0;
        
        let calculator = createCalculator();
        
        expect(calculator.get()).to.equal(expectedValue);
        expect(calculator.value).to.be.undefined;
    });

})