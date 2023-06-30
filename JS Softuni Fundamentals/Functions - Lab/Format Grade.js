function formatGrade(grade){

    let gradeString=grade.toFixed(2);
    
    let output;

    if(grade<3.00){
        output="Fail";
        gradeString="2";
    }else if (grade<3.50) {
        output="Poor";
        
    }else if (grade<4.50) {
        output="Good";
    }else if (grade<5.50) {
        output="Very good";
    }else if (grade<6.00) {
        output="Excellent";
    }

    console.log(`${output} (${gradeString})`);
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);