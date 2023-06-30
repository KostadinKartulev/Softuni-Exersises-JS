function extract(content) {
    let textelement=document.getElementById(content);
    let matches=textelement.textContent.matchAll(/\((.*?)\)/g);
    let result=[];
    for (let el of matches) {
        result.push(el[1])
    }
    return result.join("; ");
    
}