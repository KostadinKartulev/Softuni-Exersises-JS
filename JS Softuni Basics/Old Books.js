function OldBooks(input){
    let wantedbook=input[0];
    let i=1;
    let count=0;
    while (i<input.length) {
        let otherbook=input[i]
        i++;
       
        if (wantedbook===otherbook) {
            console.log(`You checked ${count} books and found it.`);
            return;
        }else if(otherbook==="No More Books"){
            console.log("The book you search is not here!");
            console.log(`You checked ${count} books.`);
            break;
            
        }
        count++;
    }
}
OldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])