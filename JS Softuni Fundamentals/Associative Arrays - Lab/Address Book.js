function addressBook(arrInput) {
    
    let result={};
    for (let element of arrInput ) {
        let [name,address]=element.split(":");
        result[name]=address;
    }
    let arrSortedResult=Object.entries(result);
    arrSortedResult.sort((a,b)=>a[0].localeCompare(b[0]));

    let sortedResult={};
    for (let [name,address] of arrSortedResult) {
        sortedResult[name]=address;
    }
    for (let name in sortedResult) {
        console.log(`${name} -> ${result[name]}`);
    }
}

addressBook(
['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
addressBook(
['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);