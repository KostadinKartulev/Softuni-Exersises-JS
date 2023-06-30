function roadRadar(currSpeed, area) {
    let speedLimit;
    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;

        default:
            break;
    }

    let output;
    if (currSpeed <= speedLimit) {
        output = `Driving ${currSpeed} km/h in a ${speedLimit} zone`;
    } else {
        let differenceInSpeeds = currSpeed - speedLimit;
        let status;
        switch (true) {
            case (differenceInSpeeds<=20):
            status="speeding";
                break;
            case (differenceInSpeeds<=40):
                status="excessive speeding";
                break;

            default:
                status="reckless driving";
                break;
        }

        output=`The speed is ${differenceInSpeeds} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    
    console.log(output);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');