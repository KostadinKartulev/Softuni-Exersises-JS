function wordsUppercase(text) {
    let regExp=/\w+/g;
    let arrWordsToUpperCase=text.match(regExp).map(word=>word.toLocaleUpperCase());
    console.log(arrWordsToUpperCase.join(", "));

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');