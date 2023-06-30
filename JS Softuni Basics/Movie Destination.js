function Cost(input){
    let budget=parseFloat(input[0]);
    let destination=input[1];
    let season=input[2];
    let days=parseInt(input[3]);
    let costforoneday=0.00;
    let totalcost=0.00;
    if(season=="Winter"){
        if(destination=="Dubai"){
            costforoneday=45000;
            totalcost=(costforoneday*days)-((costforoneday*days)*(30/100));
        }else if(destination=="Sofia"){
            costforoneday=17000;
            totalcost=(costforoneday*days)+((costforoneday*days)*(25/100));
        }else if(destination=="London"){
            costforoneday=24000;
            totalcost=(costforoneday*days);
        }
    }else if(season=="Summer"){
        if(destination=="Dubai"){
            costforoneday=40000;
            totalcost=(costforoneday*days)-((costforoneday*days)*(30/100));
        }else if(destination=="Sofia"){
            costforoneday=12500;
            totalcost=(costforoneday*days)+((costforoneday*days)*(25/100));
        }else if(destination=="London"){
            costforoneday=20250;
            totalcost=(costforoneday*days);
        }
    }
    if(budget>totalcost){
        console.log(`The budget for the movie is enough! We have ${(budget-totalcost).toFixed(2)} leva left!`);
    }else if(budget<totalcost){
        console.log(`The director needs ${((budget-totalcost)*-1).toFixed(2)} leva more!`);
    }else{
        console.log(`The director needs ${((budget-totalcost)*-1).toFixed(2)} leva more!`);
    }
   
}
Cost(["400000","Sofia","Winter","20"])