function CenturiestoMinutes(centuries){
let years=centuries*100;
let days=Math.trunc(years*365.2422);
let hours=days*24;
let minutes=hours*60;

console.log(`${Math.round(centuries)} centuries = ${Math.round(years)} years = ${Math.round(days)} days = ${Math.round(hours)} hours = ${Math.round(minutes)} minutes`);
}
CenturiestoMinutes(1);
CenturiestoMinutes(5);