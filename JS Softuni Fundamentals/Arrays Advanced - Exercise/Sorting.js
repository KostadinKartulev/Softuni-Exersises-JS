function sorting(nums) {
    
    let arrResult=[];
    let numOfIterations=nums.length;
    for (let i = 0; i < numOfIterations; i++) {
       if (i%2==0) {
        nums.sort((a,b)=>b-a);
       } else{
        nums.sort((a,b)=>a-b);
       }
        let element=nums.shift();
        arrResult.push(element);
        
        
    }
    console.log(arrResult.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
