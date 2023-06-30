function firstAndLastKNumbers(arrInput) {
    let k=arrInput.shift();
    let firstKElements=arrInput.slice(0,k);
    let lastKELements=arrInput.slice(-k);

    console.log(firstKElements.join(" "));
    console.log(lastKELements.join(" "));
    

}
firstAndLastKNumbers([2, 
7, 8, 9]
);
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   );

