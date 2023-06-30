function CalculateMoney(input){
    let neededmoney=parseFloat(input[0]);
    let puzzels=parseInt(input[1]);
    let doll=parseInt(input[2]);
    let bear=parseInt(input[3]);
    let minion=parseInt(input[4]);
    let truck=parseInt(input[5]);
    let earnedmoney=(puzzels*2.60)+(doll*3)+(bear*4.10)+(minion*8.20)+(truck*2);
    if((puzzels+doll+bear+minion+truck)>=50){
        earnedmoney=earnedmoney-(earnedmoney*(25/100));
    }
    let moneyleft=earnedmoney-(earnedmoney*(10/100));
    if(moneyleft>neededmoney){
        console.log(`Yes! ${(moneyleft-neededmoney).toFixed(2)} lv left.`);
    }else if(moneyleft<neededmoney){
        console.log(`Not enough money! ${((moneyleft-neededmoney)*-1).toFixed(2)} lv needed.`);
    }else{
        console.log(`Yes! ${(moneyleft-neededmoney).toFixed(2)} lv left.`);
    }
}
CalculateMoney(["40.8","20","25","30","50","10"])