function GetRecord(input){
    let currrecord=parseFloat(input[0]);
    let distance=parseFloat(input[1]);
    let timefore1meter=parseFloat(input[2]);

    let numberofdelays=Math.floor(distance/15);
    let timedelay=numberofdelays*12.5;

    let timeofperson=(distance*timefore1meter)+timedelay;

    if(timeofperson<currrecord){
        console.log(`Yes, he succeeded! The new world record is ${(timeofperson.toFixed(2))} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(timeofperson-currrecord).toFixed(2)} seconds slower.`)
    }
}
GetRecord(["55555.67","3017","5.03"])