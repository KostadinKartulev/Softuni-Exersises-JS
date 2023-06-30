function oddOccurrences(arrInput) {
    let arrWords=arrInput.split(" ");
    let setWords=new Set();
    for (let word of arrWords) {
        let count=0;
        for (let comparedWord of arrWords) {
            if (word.toLocaleLowerCase()==comparedWord.toLocaleLowerCase()) {
                count++;
            }
        }
        if (count%2==1) {
            setWords.add(word.toLocaleLowerCase());
        }
    }
    let result=Array.from(setWords).join(" ");
    console.log(result);
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');