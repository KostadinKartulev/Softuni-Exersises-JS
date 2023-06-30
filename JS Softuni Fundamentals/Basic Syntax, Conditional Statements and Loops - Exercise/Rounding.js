function Round(num,precision ){
if (precision>15) {
    precision=15;
}
let rounedNum= num.toFixed(precision) 
console.log(parseFloat(rounedNum));
}
Round(3.1415926535897932384626433832795,2)