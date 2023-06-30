function Cost(input){
    let buget=parseFloat(input[0]);
    let numberofpeople=parseInt(input[1]);
    let onecostumecost=parseFloat(input[2]);
    
    let decorcost=buget*(10/100);
    let costofallcostumes=0;
    if(numberofpeople>150){
        costofallcostumes=(numberofpeople*onecostumecost)-(((numberofpeople*onecostumecost)*(10/100)));
    }
    else{

        costofallcostumes=numberofpeople*onecostumecost;
    }
    let totalcost=costofallcostumes+decorcost;
    if(totalcost > buget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${((buget-totalcost)*-1).toFixed(2)} leva more.`)
    } else if(totalcost < buget || totalcost==buget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(buget-totalcost).toFixed(2)} leva left.`)
    }
}
Cost(["9587.88","222","55.68"])