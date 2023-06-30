function daysInAMonth(monthNum,year) {

    let totalDaysInTheMonth=new Date(year,monthNum,0).getDate();
    console.log(totalDaysInTheMonth);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);