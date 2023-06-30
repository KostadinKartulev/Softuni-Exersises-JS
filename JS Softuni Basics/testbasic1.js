function EX1(input){
    let costnight=20;
    let costtransportcard=1.60;
    let costticket=6;

    let numberofpeople=parseInt(input[0]);
    let nightsNum=parseInt(input[1]);
    let transportcardsNum=parseInt(input[2]);
    let ticketsNum=parseInt(input[3]);

    let cost=numberofpeople*((nightsNum*costnight)+(transportcardsNum*costtransportcard)+(ticketsNum*costticket));
    let endcost=cost+(cost*(25/100));
    
    console.log(endcost.toFixed(2));
}
EX1([20,14,30,6])