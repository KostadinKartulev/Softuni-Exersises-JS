function calculateFigureArea(input){
let type=input[0];
let area=0;

if(type=="square"){
    let a=parseFloat(input[1]);
    area=(a*a).toFixed(3);
}else if(type=="rectangle"){
    let a=parseFloat(input[1]);
    let b=parseFloat(input[2]);
    area=(a*b).toFixed(3);
}else if(type=="circle"){
    let r=parseFloat(input[1]);
    area=(Math.PI*Math.pow(r,2)).toFixed(3);

}else if(type=="triangle"){
   
    let a=parseFloat(input[1]);
    let h=parseFloat(input[2]);
    area=((a*h)/2).toFixed(3);
}
console.log(area);
}
calculateFigureArea(["triangle","4.5","20"]);