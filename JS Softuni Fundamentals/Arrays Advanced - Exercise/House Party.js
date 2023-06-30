function houseParty(arrInput) {
    
    let guests=[];
    for (let i = 0; i < arrInput.length; i++) {
        let indexOFWhiteSpace=arrInput[i].indexOf(" ");
        let name=arrInput[i].split("").splice(0,indexOFWhiteSpace);
        name=name.join("")
        if (arrInput[i].slice(indexOFWhiteSpace)==" is going!" && guests.indexOf(name)==-1) {
            guests.push(name);
        }else if (arrInput[i].slice(indexOFWhiteSpace)==" is going!" && guests.indexOf(name)!=-1) {
            console.log(`${name} is already in the list!`);
        }else if (arrInput[i].slice(indexOFWhiteSpace)==" is not going!" && guests.indexOf(name)!=-1) {
        guests.splice(guests.indexOf(name),1)
        }else if (arrInput[i].slice(indexOFWhiteSpace)==" is not going!" && guests.indexOf(name)==-1) {
           console.log(`${name} is not in the list!`);
        }
        
    }
    console.log(guests.join("\n"));

}
houseParty(
['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
houseParty(
['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);

