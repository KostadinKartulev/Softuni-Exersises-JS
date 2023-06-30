function stringSubstring(word,text) {
    
    let wordLowerCase=word.toLocaleLowerCase();
    text=text.toLocaleLowerCase();

    if (text.includes(wordLowerCase)) {
        console.log(word);
        return;
    }else{
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);
stringSubstring('python',
'JavaScript is the best programming language'
);