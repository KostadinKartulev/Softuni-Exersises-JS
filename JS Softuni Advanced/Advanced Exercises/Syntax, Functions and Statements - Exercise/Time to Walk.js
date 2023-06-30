function timeToWalk(steps, footPrintLengthInMeters, speedInKmInHour) {

    //time=distance/speed

    let distanceInMeters = steps * footPrintLengthInMeters;
    let restTimeInMin = Math.floor(distanceInMeters / 500);
    let speedInMPerSeconds = speedInKmInHour / 3.6;
    let minutes = ((distanceInMeters / speedInMPerSeconds) / 60) + restTimeInMin;
    
    let seconds = Math.round(Number(String(minutes % 1 * 60)));
    let hours = minutes / 60;
    minutes = Math.floor(Number(String(hours % 1 * 60)));
    hours = Math.floor(hours);


    console.log(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);