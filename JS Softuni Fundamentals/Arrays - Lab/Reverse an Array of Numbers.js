function ReverseanArrayofNumbers(n,elements){

    let arr=[];
    for (let i = n; i > 0; i--) {
        arr.push(elements[i-1])
        
    }

    console.log(arr.join(" "));
}
ReverseanArrayofNumbers(3, [10, 20, 30, 40, 50]);