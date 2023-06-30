function censoredWords(text, word) {
    
    let newText = text.split(word).join("*".repeat(word.length));
    console.log(newText);
    
    //another way:
    /*
        let wordLength = word.length;
        
        while (text.includes(word)) {
            text = text.replace(word, "*".repeat(wordLength));
        }
    
        console.log(text);
    */

    
}


censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
censoredWords('Find the hidden word hidden', 'hidden');