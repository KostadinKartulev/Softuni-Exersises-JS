function IntegerandFloat(num1,num2,num3){
let sum=num1+num2+num3;
let typeOfSum;
if (sum%1==0) {
    typeOfSum="Integer";
}else{
    typeOfSum="Float";
}
console.log(`${sum} - ${typeOfSum}`)
}
IntegerandFloat(9, 100, 1.1);
IntegerandFloat(100, 200, 303);
