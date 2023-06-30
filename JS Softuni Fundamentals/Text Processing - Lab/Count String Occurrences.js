function countStringOccurrences(text,word) {
   
   let tokens=text.split(" ");
   let count=0;
   for (let element of tokens) {
    if (word==element) {
        count++;
    }
   }
   
   console.log(count);
}

countStringOccurrences(
'This is a word and it also is a sentence',
'is'
);
countStringOccurrences(
'softuni is great place for learning new programming languages',
'softuni'
);