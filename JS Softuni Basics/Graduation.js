function Graduation(input){
    let name=input[0];
    let i=1;
    let average;
    let sumofgrades=0;
    let numofgrades=input.length-1;
    let count=0;
    while (i<input.length) {
        let grade=Number(input[i]);
        i++;
        count++;
        if (grade<4.00) {
            console.log(`${name} has been excluded at ${count} grade`)
            return;
        }
        sumofgrades+=grade;

    }
    average=sumofgrades/numofgrades;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    
}
Graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


