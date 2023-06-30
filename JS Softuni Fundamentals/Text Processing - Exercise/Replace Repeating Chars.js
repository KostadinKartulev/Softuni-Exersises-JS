function replaceRepeatingChars(word) {
    let letters=word.split("");
    let arrNewLetters=[];
    for (let i = 0; i < letters.length; i++) {
        let currletter=letters[i];
        let nextLetter=letters[i+1];
       if (currletter!==nextLetter) {
        arrNewLetters.push(letters[i])
       }
        
    }
    console.log(arrNewLetters.join(""));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');