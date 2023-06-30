function solution(num) {
    function add(num1,num2) {
        return num1+num2;
    }
    return add.bind(this,num);
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
