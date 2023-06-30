function HoursToRead(input){
    let numberofpages=parseInt(input[0]);
    let pagesreadperhour=parseInt(input[1]);
    let numberofdays=parseInt(input[2]);

    let neededhoursperday=(numberofpages/pagesreadperhour)/numberofdays;
    console.log(neededhoursperday);
}
HoursToRead(["212","20","2"]);


