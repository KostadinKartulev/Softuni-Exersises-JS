function EvenPowersof2(input){
    let n=Number(input[0]);
for (let index = 0; index <= n; index++) {
    if (index%2==0) {
        console.log(Math.pow(2,index));
    }
   
    
}
}
EvenPowersof2([3])