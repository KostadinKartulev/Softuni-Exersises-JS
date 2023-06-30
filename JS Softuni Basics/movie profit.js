function Profit(input){
    
    let name=input[0];
    let numberofdays=parseInt(input[1]);
    let tickets=parseInt(input[2]);
    let ticketprice=parseFloat(input[3]);
    let percent=parseInt(input[4]);
    let totalmoney=tickets*ticketprice*numberofdays;
    let endmoney =totalmoney-(totalmoney*(percent/100));
    console.log(`The profit from the movie ${name} is ${endmoney.toFixed(2)} lv.`)
}   
Profit(["The Programmer",20,500,7.50,7])