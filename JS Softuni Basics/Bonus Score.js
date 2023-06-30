function Bonus(input){
    let bonusscore=0;
    let scorebeforebonus=Number(input[0]);
    if(scorebeforebonus<=100){
        bonusscore+=5;
    }else if(scorebeforebonus>100 && scorebeforebonus<=1000){
    bonusscore=scorebeforebonus*(20/100);
    }else if(scorebeforebonus>1000){
        bonusscore=scorebeforebonus*(10/100);
        }
    
    if(scorebeforebonus%2==0){
        bonusscore+=1;
    }else if(scorebeforebonus%10==5){
        bonusscore+=2;
    }
    console.log(bonusscore);
    console.log(bonusscore+scorebeforebonus);
}
Bonus(["15875"])