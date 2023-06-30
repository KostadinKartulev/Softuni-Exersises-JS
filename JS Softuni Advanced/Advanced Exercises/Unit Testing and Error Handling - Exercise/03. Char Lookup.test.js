let lookupChar=require('./03. Char Lookup');
let expect=require('chai').expect;

describe('lookupChar func TESTS', () => {
    it('Check if returns undefined with wrong types of passed parameters',() => {
        let notStringParameter1=5;
        let notIntegerParameter1='test';
        let notStringParameter2=[];
        let notIntegerParameter2=5.4;

        let stringParameter3='test';
        let notIntegerParameter3='asd';
        let notStringParameter4={};
        let integerParameter4=2;
        let stringParameter5='test';
        let notIntegerParameter4=2.25;

        expect(lookupChar(notStringParameter1,notIntegerParameter1)).to.be.undefined;
        expect(lookupChar(notStringParameter2,notIntegerParameter2)).to.be.undefined;
        expect(lookupChar(stringParameter3,notIntegerParameter3)).to.be.undefined;
        expect(lookupChar(notStringParameter4,integerParameter4)).to.be.undefined;
        expect(lookupChar(stringParameter5,notIntegerParameter4)).to.be.undefined;
    });

    it('Check if returns message for wrong index values',() => {
        let textParameter1='test';
        let indexParameter1=4;
        let textParameter2='test';
        let indexParameter2=-1;

        expect(lookupChar(textParameter1,indexParameter1)).to.equal('Incorrect index');
        expect(lookupChar(textParameter2,indexParameter2)).to.equal('Incorrect index');
    });

    it('Check if returns message for empty passed string',() => {
        let textParameter='';
        let indexParameter=0;

        expect(lookupChar(textParameter,indexParameter)).to.equal('Incorrect index');
    });

    it('Check if returns correct char at specified index',() => {
        let textParameter1='dog';
        let indexParameter1=2;
        let textParameter2='dog';
        let indexParameter2=0;
        let textParameter3='shop';
        let indexParameter3=2;

        expect(lookupChar(textParameter1,indexParameter1)).to.equal('g');
        expect(lookupChar(textParameter2,indexParameter2)).to.equal('d');
        expect(lookupChar(textParameter3,indexParameter3)).to.equal('o');
    });
})