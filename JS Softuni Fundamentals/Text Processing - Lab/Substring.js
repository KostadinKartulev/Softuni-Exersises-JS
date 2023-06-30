function substring(word,startIndex,count) {
    
    let substringOfWord=word.substring(startIndex,count+startIndex)
    console.log(substringOfWord);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);