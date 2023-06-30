function solve() {
  
    let textInputElement=document.getElementById("input");
    let sentences=textInputElement.value.split(".");
    if (sentences.indexOf("")!==-1) {
        sentences=sentences.filter(x=>x!=="");
    }

    let outputElement=document.getElementById("output");
    let countSentences=0;
    let textInParagraph="";
    for (let i = 0; i < sentences.length; i++) {
        textInParagraph+=sentences[i]+".";
        countSentences++;
        if (countSentences===3) {
            let paragraph=document.createElement("p");
            paragraph.textContent=textInParagraph;
            outputElement.appendChild(paragraph);
            countSentences=0;
            textInParagraph="";
        }else if(countSentences<3 && sentences.length-i===1){
            let paragraph=document.createElement("p");
            paragraph.textContent=textInParagraph;
            outputElement.appendChild(paragraph);
        }
    }

}