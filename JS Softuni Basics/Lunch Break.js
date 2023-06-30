function CalculateTime(input){
    let TVshow=input[0];
    let episodelength=parseInt(input[1]);
    let totalbreaktime=parseInt(input[2]);

    let timetoeat=totalbreaktime*(1/8);
    let relaxtime=totalbreaktime*(1/4);

    let timeleft=totalbreaktime-(timetoeat+relaxtime);

    let freetimeleft=timeleft-episodelength;
    if(freetimeleft>=0){
        console.log(`You have enough time to watch ${TVshow} and left with ${Math.ceil(freetimeleft)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${TVshow}, you need ${(Math.ceil(freetimeleft*-1))} more minutes.`)
    }

}
CalculateTime(["Teen Wolf","48","60"])