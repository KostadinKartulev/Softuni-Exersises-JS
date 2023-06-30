function solve(arr,start,end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    start=Math.max(start,0);
    end=Math.min(end,arr.length-1);

    let sum=arr.slice(start,end+1).map(Number).reduce((acc,x)=>acc+x,0);
    return sum;
}
console.log(solve([1,2,3,4,5],1,4));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve('text', 0, 2));
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));