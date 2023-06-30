let isSymmetric=require('./05. Check for Symmetry');
let expect=require('chai').expect;

describe('Check if isSymmetric works', () => {
    it('Should return false if parameter of func is not array ',() => {
        let notArr1='lorem ipsum';
        let notArr2=123;
        let expectedResult=false;

        let actualResult1=isSymmetric(notArr1);
        let actualResult2=isSymmetric(notArr2);

        expect(actualResult1).to.equal(expectedResult);
        expect(actualResult2).to.equal(expectedResult);
    });

    it('Check if symmetric with a symmetric array ',() => {
        let notArr=[1,2,3,2,1];
        let expectedResult=true;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Check if symmetric with a non-symmetric array ',() => {
        let notArr=[1,2,3,1,2];
        let expectedResult=false;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return true with empty array ',() => {
        let notArr=[];
        let expectedResult=true;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return false with object ',() => {
        let notArr={};
        let expectedResult=false;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Check if symmetric with a symmetric array with negative value ',() => {
        let notArr=[-3,2,-1,2,-3];
        let expectedResult=true;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Check if symmetric with a symmetric array with zero value ',() => {
        let notArr=[0,0,0,0,0,0];
        let expectedResult=true;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Check if symmetric with a symmetric array with zero value ',() => {
        let notArr=['aa','Bb','c','c','bB','AA'];
        let expectedResult=false;

        let actualResult=isSymmetric(notArr);

        expect(actualResult).to.equal(expectedResult);
    });
})