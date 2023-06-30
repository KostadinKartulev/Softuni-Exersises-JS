function DayofWeek(dayNum){
   
    let arr_daysOfWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    if (dayNum>=1 && dayNum<=7) {
        console.log(arr_daysOfWeek[dayNum-1]);
    }else{
        console.log("Invalid day!");
    }
}
DayofWeek(3);