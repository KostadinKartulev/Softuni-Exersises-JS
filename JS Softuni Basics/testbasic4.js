function  EX4(input){
   let numberofstudents=parseInt(input[0]);
   let count5to6=0;
   let count4to4_99=0;
   let count3to3_99=0;
   let count2to2_99=0;

   let sum5to6=0;
   let sum4to4_99=0;
   let sum3to3_99=0;
   let sum2to2_99=0;
   
   for (let index = 1; index <= numberofstudents; index++) {
    let grade=parseFloat(input[index]);
    if(grade>=2.00 && grade<=2.99){
        count2to2_99++;
        sum2to2_99+=grade;
    }else if(grade>=3.00 && grade<=3.99){
        count3to3_99++;
        sum3to3_99+=grade;
    }else if(grade>=4.00 && grade<=4.99){
        count4to4_99++;
        sum4to4_99+=grade;
    }else if(grade>=5.00 && grade<=6.00){
        count5to6++;
        sum5to6+=grade;
    }
    
    
   }
   let average=(sum2to2_99+sum3to3_99+sum4to4_99+sum5to6)/numberofstudents
    console.log(`Top students: ${((count5to6/numberofstudents)*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((count4to4_99/numberofstudents)*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((count3to3_99/numberofstudents)*100).toFixed(2)}%`);
    console.log(`Fail: ${((count2to2_99/numberofstudents)*100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
EX4(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])