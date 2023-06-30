function GetTotalCost(input){
    let pens=5.80*parseInt(input[0]);
    let markers=7.20*parseInt(input[1]);
    let cleaningagent=1.20*parseInt(input[2]);
    let discount=parseFloat(input[3])/100;

    let cost=(pens+markers+cleaningagent);
    let discountedcost=cost-(cost*discount);
    console.log(discountedcost);

}
GetTotalCost(["2","3","4","25"]);