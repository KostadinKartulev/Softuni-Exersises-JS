function ShoppingCost(input){
    let buget=parseFloat(input[0]);
    let numberofvideocards=parseInt(input[1]);
    let numberofprocessors=parseInt(input[2]);
    let numberofram=parseInt(input[3]);

    let videocardscost=numberofvideocards*250;
    let processorscost=(videocardscost*(35/100))*numberofprocessors;
    let ramcost=(videocardscost*(10/100))*numberofram;

    let totalcost=videocardscost+processorscost+ramcost;
    if(numberofvideocards>numberofprocessors){
        totalcost=totalcost-(totalcost*(15/100));
    }

    if(buget>totalcost || buget==totalcost){
        let remainings=buget-totalcost;
        console.log(`You have ${remainings} leva left!`);
    }else{
        let neededmoney=((buget-totalcost)*-1).toFixed(2);
        console.log(`Not enough money! You need ${neededmoney} leva more!`);
    }

}
ShoppingCost(["920.45","3","1","1"]);