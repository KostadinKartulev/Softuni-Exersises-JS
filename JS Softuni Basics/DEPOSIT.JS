function GetSum(input){
    let deposit=parseFloat(input[0]);
    let timefordeposit=parseInt(input[1]);
    let yearlyinterest=parseFloat(input[2])/100;
    
   let sum= deposit +timefordeposit * ((deposit * yearlyinterest ) / 12);
   console.log(sum);
}
GetSum(["200","3","5.7"]);