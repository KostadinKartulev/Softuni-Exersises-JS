let isOddOrEven=require('./02. Even Or Odd');
let expect=require('chai').expect;

describe('isOddOrEven func TESTS', () => {
    it('Check if passed parameter is string',() => {
        let para1='text';
        let para2={};
        let para3=5;
        
        expect(isOddOrEven(para1)).to.not.be.undefined;
        expect(isOddOrEven(para2)).to.be.undefined;
        expect(isOddOrEven(para3)).to.be.undefined;
    });

    it('Check if returns even',() => {
        let para1='text';
        let para2='abcdef';
        let para3='';
        
        expect(isOddOrEven(para1)).to.equal('even');
        expect(isOddOrEven(para2)).to.equal('even');
        expect(isOddOrEven(para3)).to.equal('even');
    });

    it('Check if returns odd',() => {
        let para1='texts';
        let para2='abc';
        let para3='1';
        
        expect(isOddOrEven(para1)).to.equal('odd');
        expect(isOddOrEven(para2)).to.equal('odd');
        expect(isOddOrEven(para3)).to.equal('odd');
    });
})