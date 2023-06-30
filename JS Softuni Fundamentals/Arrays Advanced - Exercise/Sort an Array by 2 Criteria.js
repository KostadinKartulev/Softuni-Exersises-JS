function sort(arrInput) {
   
    arrInput.sort((a,b)=> {
       
        let result=a.length-b.length;
        if (result==0) { 
           return a.localeCompare(b);
        }else{
            return result;
        }
    });
   
    console.log(arrInput.join("\n"));
}
sort(['alpha','beta','gamma']);
sort(['Isacc','Theodor','Jack','Harrison','George']);
