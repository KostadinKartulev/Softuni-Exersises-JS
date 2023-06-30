function TennisRanklist(input){
    let numOfTournaments=parseInt(input[0]);
    let begginingscore=parseInt(input[1]);
    let W_Count=0;
    let F_Count=0;
    let SF_Count=0;
    let totalscore;
    for (let i = 2; i < input.length; i++) {
        if (input[i]=="W") {
            W_Count++;
        }else if (input[i]=="F") {
            F_Count++;
        }else if (input[i]=="SF") {
            SF_Count++;
        }
    }
    totalscore=(W_Count*2000)+(F_Count*1200)+(SF_Count*720)+begginingscore;
    let averagescore=((W_Count*2000)+(F_Count*1200)+(SF_Count*720))/numOfTournaments;
    let percentwontournaments=(W_Count/numOfTournaments)*100;

    console.log(`Final points: ${totalscore}`);
    console.log(`Average points: ${Math.floor(averagescore)}`);
    console.log(`${percentwontournaments.toFixed(2)}%`);
}
TennisRanklist(["5","1400","F","SF","W","W","SF"]);