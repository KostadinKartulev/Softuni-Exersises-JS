function wordOccurrences(arrInput) {
    let result={};
    for (let i = 0; i < arrInput.length; i++) {
        let count=1;
        for (let j = i+1; j < arrInput.length; j++) {

            if (arrInput[i]===arrInput[j]) {
                count++;
            }
        }
        let word=arrInput[i];
        if (result.hasOwnProperty(word)==false) {
            result[word]=count;
        }   
    }
    let arrSortedResult=Object.entries(result).sort((a,b)=>b[1]-a[1]);

    for (let [word,count] of arrSortedResult) {
        console.log(word,"->",count,"times");
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", 
"another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);