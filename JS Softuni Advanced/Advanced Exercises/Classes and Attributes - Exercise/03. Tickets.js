function returnSortedObj(arrInput,sortingCriterion) {
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let arrWithObj=[];
    for (let line of arrInput) {
        let [destination,price,status]=line.split('|');
        price=Number(price);
        arrWithObj.push(new Ticket(destination,price,status));
    }
    let sorted;
    if (sortingCriterion==='price') {
        sorted=arrWithObj.sort((a,b)=>a[sortingCriterion]-b[sortingCriterion]);
    }else{
        sorted=arrWithObj.sort((a,b)=>a[sortingCriterion].localeCompare(b[sortingCriterion]));
    }

    return sorted;
}

console.log(
    returnSortedObj(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
    ));

console.log(returnSortedObj(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));