function wordTracker(arrInput) {
    
    let result={};
    let arrSearchedWords=arrInput.shift().split(" ");

   for (let word of arrSearchedWords) {
    result[word]=0;
   }
   for (let word of arrInput) {
    if (result.hasOwnProperty(word)) {
        result[word]++;
    }
   }

    let sorted=Object.entries(result).sort((a,b)=>b[1]-a[1]);
    for (let [word,occurrences] of sorted) {
        console.log(word,"-",occurrences);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );