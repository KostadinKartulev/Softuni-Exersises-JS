function pascalCaseSplitter(inputString) {
    inputString = inputString.split("");
    let arrWithWords = [];
    let word="";
    for (let i = 0; i < inputString.length; i++) {
        let letter=inputString[i];

        if (letter>="A" && letter<="Z") {
            if (word!=="") {
             arrWithWords.push(word);
             word=letter;
            }else{
             word+=letter;
            }
             
     
         } else {
             word+=letter;
             if (i==inputString.length-1) {
                 arrWithWords.push(word);
             }
         }
        
    }

   console.log(arrWithWords.join(", "));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');