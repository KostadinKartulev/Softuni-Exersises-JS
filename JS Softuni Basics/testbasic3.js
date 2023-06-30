function EX3(input){
    let numberofdancers=parseInt(input[0]);
    let score=parseFloat(input[1]);
    let season=input[2];
    let location=input[3];
    let price;
    if(location=="Bulgaria"){
        price=score*numberofdancers;
        if(season=="summer"){
            price=price-(price*0.05);
        }else if(season=="winter"){
            price=price-(price*0.08);
        }

        

    }else if(location=="Abroad"){
        price=(score*numberofdancers)+((score*numberofdancers)*(50/100));
        
        if(season=="summer"){
            price=price-(price*0.10);
        }else if(season=="winter"){
            price=price-(price*0.15);
        }
    }
    let moneyforcharity=price*0.75;
    let remainedmoney=price*0.25;
    let moneyforeachperson=remainedmoney/numberofdancers;

    console.log(`Charity - ${moneyforcharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyforeachperson.toFixed(2)}`);
}
EX3([1,89.5,"summer","Abroad"])