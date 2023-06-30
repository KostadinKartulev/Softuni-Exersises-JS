class Hex{
    constructor(value){
        this.value=value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        let hexadecimalValue='0x'+this.value.toString(16).toLocaleUpperCase();//////////
        return hexadecimalValue;
    }
    plus(number){
        let newValue;
        if (typeof number==='number') {
        newValue= this.value+number;
        }else if(typeof number==='object'){
            newValue= this.value+number.value;
        }
        return new Hex(newValue);
    }
    minus(number){
        let newValue;
        if (typeof number==='number') {
        newValue= this.value-number;
        }else if(typeof number==='object'){
            newValue= this.value-number.value;
        }
        return new Hex(newValue);
    }
    parse(string){
        let decimalNum=parseInt(string, 16);
        return decimalNum;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256); 
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));

