function EX2(input){
    let pocketmoneyAday=parseFloat(input[0]);
    let moneyfromsalesAday=parseFloat(input[1]);
    let totalmoneyloses=parseFloat(input[2]);
    let costforpresent=parseFloat(input[3]);
    
    let totalcolectedmoney=(pocketmoneyAday*5)+(moneyfromsalesAday*5)-totalmoneyloses;

    if(totalcolectedmoney>=costforpresent){
        console.log(`Profit: ${totalcolectedmoney.toFixed(2)} BGN, the gift has been purchased.`)
    }else if(totalcolectedmoney<costforpresent){
        console.log(`Insufficient money: ${((totalcolectedmoney-costforpresent)*-1).toFixed(2)} BGN.`)
    }
}
EX2([5.12,32.05,15,150])