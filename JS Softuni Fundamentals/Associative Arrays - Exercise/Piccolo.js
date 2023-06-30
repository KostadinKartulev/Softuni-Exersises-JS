function piccolo(arrInput) {
    
    let map=new Map();
    for (let line of arrInput) {
        line=line.split(", ");
        let direction=line[0];
        let carNumber=line[1];

        if (direction=="IN") {
            map.set(carNumber,direction)
        } else {
            map.delete(carNumber);
        }
    }
    let sorted=Array.from(map).sort();
    if (map.size==0) {
        console.log("Parking Lot is Empty");
    } else {
        sorted.forEach(([carNum,direction])=>console.log(carNum));
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
console.log("----------");
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);