function modernTimesofHashTag(input) {
    input=` ${input} `;
    let arrWithWords=[];
    let startIndex=0;
    while (input.indexOf("#",startIndex)!==-1) {
        let indexOfHashTag=input.indexOf("#",startIndex);
        let word=input.substring(indexOfHashTag+1,input.indexOf(" ",indexOfHashTag));
        word=word.split("");
        let isSpecialWord=true;
        for (let letter of word) {
            
            if (!(letter>="a" && letter<="z" && letter>="A" && letter<="Z")) {
                isSpecialWord==false;
                
            }
        }
        if (isSpecialWord && word.length>0) {
            word=word.join("");
            arrWithWords.push(word);
        }
        startIndex=indexOfHashTag+1;

    }
    for (let word of arrWithWords) {
        console.log(word);
    }
}

modernTimesofHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesofHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');