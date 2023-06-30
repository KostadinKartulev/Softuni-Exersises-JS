function Salary(input){
    let opentabs=parseInt(input[0]);
    let salary=Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        if (input[i]=="Facebook" && salary>0) {
            salary-=150;
        }else  if (input[i]=="Instagram"&& salary>0) {
            salary-=100;
        }else  if (input[i]=="Reddit"&& salary>0) {
            salary-=50;
        }else if(salary<=0){
            console.log("You have lost your salary.");
            return;
        }
        
    }
    if(salary<=0){
        console.log("You have lost your salary.");
        return;
    }
    console.log(parseInt(salary));    
}
Salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);