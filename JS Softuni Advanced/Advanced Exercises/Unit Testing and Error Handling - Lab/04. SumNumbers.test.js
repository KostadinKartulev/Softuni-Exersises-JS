let sum=require('./04. Sum of Numbers');
let expect=require('chai').expect;

describe('Should return the sum of all elements',()=>{
    it('Normal values',() => {
        let nums=[1,2,3,4,5];
        let expectedSum=15;

        let actualSum=sum(nums);

        expect(actualSum).to.equal(expectedSum);
    });

    it('0 values',() => {
        let nums=[0,0,0,0];
        let expectedSum=0;

        let actualSum=sum(nums);

        expect(actualSum).to.equal(expectedSum);
    });

    it('All negative values',() => {
        let nums=[-1,-2,-3,-4,-5];
        let expectedSum=-15;

        let actualSum=sum(nums);

        expect(actualSum).to.equal(expectedSum);
    });

    it('One negtive value',() => {
        let nums=[1,2,3,4,-5];
        let expectedSum=5;

        let actualSum=sum(nums);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Empty array',() => {
        let nums=[];
        let expectedSum=0;

        let actualSum=sum(nums);

        expect(actualSum).to.equal(expectedSum);
    });
})