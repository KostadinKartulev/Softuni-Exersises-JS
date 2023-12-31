class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length){
        this.innerLength+=length;
    }
    decrease(length){
        let newInnerLength=this.innerLength-length;
        this.innerLength=Math.max(newInnerLength,0);
    }
    toString(){
        if (this.innerString.length<=this.innerLength) {
            return this.innerString;
        }else{
            let difference=this.innerString.length-this.innerLength;
            return this.innerString.slice(0,-difference) + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
