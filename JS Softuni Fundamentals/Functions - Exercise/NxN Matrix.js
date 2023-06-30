function makeNxNMatrix(num){

    let arr=[];
    for (let i = 0; i < num; i++) {
        arr.push(num);
        
    }
    for (let i = 0; i < num; i++) {
        
        console.log(arr.join(" "));
    }
}
makeNxNMatrix(3);
makeNxNMatrix(7);
makeNxNMatrix(2);
