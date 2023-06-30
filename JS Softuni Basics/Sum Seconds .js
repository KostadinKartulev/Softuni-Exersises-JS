function SumSeconds(input){
    let seconds1=parseInt(input[0]);
    let seconds2=parseInt(input[1]);
    let seconds3=parseInt(input[2]);
    let totalseconds=seconds1+seconds2+seconds3;

    let minutes=Math.floor(totalseconds/60);
    let secondsaftermin=totalseconds%60;
    if(secondsaftermin<10){
        secondsaftermin="0"+secondsaftermin;
    }
    console.log(`${minutes}:${secondsaftermin}`)
}
SumSeconds(["35","45","44"])