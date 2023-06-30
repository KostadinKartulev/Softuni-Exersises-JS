function listOfNames(arrInput) {
    
    let sorted=arrInput.sort((a,b)=>a.localeCompare(b));
    sorted.forEach((element,i) =>console.log(`${i+1}.${element}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
