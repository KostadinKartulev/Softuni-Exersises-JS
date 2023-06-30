function TriangleofNumbers(num){
for (let i = 1; i <= num; i++) {
    let str="";
    for (let y = 1; y <= i; y++) {
        str+=i+" ";
    }
    
    console.log(str);
    
}
}
TriangleofNumbers(5)