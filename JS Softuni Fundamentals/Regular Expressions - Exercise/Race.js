function race(arrInput) {
    
    let participants={};
    let listOfRacers=arrInput.shift().split(", ");
    let patternForNames=/[A-Za-z]/g;
    let patternForDigits=/\d/g;

    for (let line of arrInput) {
        if (line=='end of race') {
            break;
        }
        let name=line.match(patternForNames).join("");
        let digits=line.match(patternForDigits);
        let sum=0;
        for (let digit of digits) {
            sum+=Number(digit);
        }

        if (participants.hasOwnProperty(name)) {
            participants[name]+=sum;
        }else if (listOfRacers.includes(name)) {
            participants[name]=sum;
        }
    }

    let sorted=Object.entries(participants).sort((a,b)=>b[1]-a[1]);
    
    
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);