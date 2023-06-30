function RepaintingCost(input){
    let naylon=(parseInt(input[0])+2)*1.50;
    let paint=(parseInt(input[1])+(parseInt(input[1])*(10/100)))*14.50;
    let thinner=parseInt(input[2])*5.00;
    let workhours=parseInt(input[3]);
    
    let plasticbags=0.40; 
    let workerssalary=((naylon+paint+thinner+plasticbags)*(30/100))*workhours;

    let totalcost=naylon+paint+thinner+plasticbags+workerssalary;
    console.log(`${totalcost}`);
}
RepaintingCost(["10","11","4","8"])