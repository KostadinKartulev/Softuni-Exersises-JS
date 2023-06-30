function Movieday(input){
    let timeforshooting=parseInt(input[0]);
    let numberofscenes=parseInt(input[1]);
    let timeforscene=parseInt(input[2]);
    
    let totaltimeused=(numberofscenes*timeforscene)+(timeforshooting*0.15)
    if(totaltimeused<timeforshooting){
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeforshooting-totaltimeused)} minutes left!`);
    }else if(totaltimeused>timeforshooting){
        console.log(`Time is up! To complete the movie you need ${Math.round((timeforshooting-totaltimeused)*-1)} minutes.`);
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.round((timeforshooting-totaltimeused)*-1)} minutes.`);
    }
}
Movieday([120,10,11])