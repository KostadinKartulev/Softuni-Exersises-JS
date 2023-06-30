function getFibonator() {
    // let fibonacciNums=[0,1];
    // return function() {
    //     let currFibonacciNum=fibonacciNums[fibonacciNums.length-1]+fibonacciNums[fibonacciNums.length-2];
    //     fibonacciNums.push(currFibonacciNum);
    //     return fibonacciNums[fibonacciNums.length-2];
    // }
    let [a,b]=[0,1];
    return ()=>{
        let c=a+b;
        a=b;
        b=c;
        return a;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
