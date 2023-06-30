function Timeplus15min(input){
    let hoursbefore=parseInt(input[0]);
    let minbefore=parseInt(input[1]);
    let totaltimeafter=(hoursbefore*60)+minbefore+15;
    let hoursafter=Math.floor(totaltimeafter/60);
    let minafter=totaltimeafter%60;

    if(hoursafter==24){
        hoursafter=0;
    }
    if(minafter<10){
        console.log(`${hoursafter}:0${minafter}`);
    }else{
        console.log(`${hoursafter}:${minafter}`);
    }
}
Timeplus15min(["23","59"]);