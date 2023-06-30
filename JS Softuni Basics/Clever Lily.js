function CleverLily(input){
    let age=parseInt(input[0]);
    let wsmachinecost=parseFloat(input[1]);
    let toycost=parseInt(input[2]);
    let moneyfrombirthdays=0;
    let toycount=0;
    let moneyforeachbirthday=0;
    for (let i = 1; i <= age; i++) {
        
        if (i%2==0) {
            moneyforeachbirthday=moneyforeachbirthday+10;
            moneyfrombirthdays+=moneyforeachbirthday-1;
        }else{
            toycount++;
        }     
    }
    let totalColectedMoney=moneyfrombirthdays+(toycost*toycount);
    if (totalColectedMoney>=wsmachinecost) {
        console.log(`Yes! ${(totalColectedMoney-wsmachinecost).toFixed(2)}`);
    }else{
        console.log(`No! ${((totalColectedMoney-wsmachinecost)*-1).toFixed(2)}`);
    }


}
CleverLily(["10","170.00","6"]);