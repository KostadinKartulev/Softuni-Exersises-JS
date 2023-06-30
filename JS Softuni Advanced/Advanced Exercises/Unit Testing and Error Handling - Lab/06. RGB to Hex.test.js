let rgbToHexColor = require('./06. RGB to Hex');
let expect = require('chai').expect;

describe('Testing if rgbToHexColor func works', () => {
    it('Should return the color in HEX like string for valid values(between 0 and 255 and integers)', async () => {
        let red = 255;
        let green = 0;
        let blue = 100;
        let expectedResult = '#FF0064';

        let actualResult = rgbToHexColor(red, green, blue);

        expect(actualResult).to.equal(expectedResult);
        expect(actualResult).to.be.a('string');
    });

    it('Checks if the example of (12,1,3) is equal to #0C0103', () => {

        expect(rgbToHexColor(12, 1, 3)).to.equal('#0C0103');
    });

    it('Should return undefined for invalid values(not between 0 and 255 )', async () => {
        let red = 256;
        let green = -1;
        let blue = 50;

        let actualResult = rgbToHexColor(red, green, blue);

        expect(actualResult).to.be.undefined;
    });

    it('Should return undefined for values that are not integer', async () => {
        let red = 0.3;
        let green = 23.22;
        let blue = 501.111;

        let actualResult = rgbToHexColor(red, green, blue);

        expect(actualResult).to.be.undefined;
        expect(Number.isInteger(red)).to.be.false;
        expect(Number.isInteger(green)).to.be.false;
        expect(Number.isInteger(blue)).to.be.false;
    });

    it('Should return undefined for values that are not integer', async () => {
        let red = 3;
        let green = 23;
        let blue = 111;

        let actualResult = rgbToHexColor(red, green, blue);

        expect(actualResult).to.equal('#03176F');
        expect(Number.isInteger(red)).to.be.true;
        expect(Number.isInteger(green)).to.be.true;
        expect(Number.isInteger(blue)).to.be.true;
    });

})