let mathEnforcer=require('./04. Math Enforcer');
let expect=require('chai').expect;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Check if returns undefined if parameter is not number', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('Check if returns correct value when different correct parameters are passed', async () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
            expect(mathEnforcer.addFive(5.32)).to.equal(10.32);
            expect(mathEnforcer.addFive(-5.1).toFixed(1)).to.equal('-0.1');
        });
    });

    describe('subtractTen', () => {
        it('Check if returns undefined if parameter is not number', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('Check if returns correct value when different correct parameters are passed', async () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(5.32)).to.equal(-4.68);
            expect(mathEnforcer.subtractTen(-5.10)).to.equal(-15.10);
        });
    });

    describe('sum', () => {
        it('Check if returns undefined if parameter is not number', () => {
            expect(mathEnforcer.sum('a',1)).to.be.undefined;
            expect(mathEnforcer.sum('a',-1)).to.be.undefined;
            expect(mathEnforcer.sum('a',1.7)).to.be.undefined;
            expect(mathEnforcer.sum(4,'a')).to.be.undefined;
            expect(mathEnforcer.sum(-4,'a')).to.be.undefined;
            expect(mathEnforcer.sum(1.5,'a')).to.be.undefined;
            expect(mathEnforcer.sum('a','b')).to.be.undefined;
            expect(mathEnforcer.sum({},[])).to.be.undefined;
        });

        it('Check if returns correct value when different correct parameters are passed', async () => {
            expect(mathEnforcer.sum(2,3)).to.equal(5);
            expect(mathEnforcer.sum(-2,-3)).to.equal(-5);
            expect(mathEnforcer.sum(-2,3)).to.equal(1);
            expect(mathEnforcer.sum(1,-6)).to.equal(-5);
            expect(mathEnforcer.sum(5.32,5.09)).to.equal(10.41);
            expect(mathEnforcer.sum(5.32,-5.09)).to.be.closeTo(0.23,0.01);
            expect(mathEnforcer.sum(-5.32,5.09)).to.be.closeTo(-0.23,0.01);
            expect(mathEnforcer.sum(-5.32,-5.09)).to.be.closeTo(-10.41,0.01);
            expect(mathEnforcer.sum(5.32,5)).to.equal(10.32);
            expect(mathEnforcer.sum(6,5.32)).to.equal(11.32);
        });
    });
});