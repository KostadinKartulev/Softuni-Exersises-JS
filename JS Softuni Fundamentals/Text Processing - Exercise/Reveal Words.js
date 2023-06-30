function revealWords(words, template) {

    words = words.split(", ");
    template = template.split(" ");
    let fullText = template.slice();
    for (let word of words) {

        let wordLength = word.length;
        fullText = fullText.map(x => {
            if (x.startsWith("*") && x.length == wordLength) {
                return word;
            } else {
                return x;
            }

        });

    }
    console.log(fullText.join(" "));
}

revealWords('great',
   'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);