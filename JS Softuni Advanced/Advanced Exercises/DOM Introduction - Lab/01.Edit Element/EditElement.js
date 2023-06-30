function editElement(h1Element,match,replacer) {
    let pattern=new RegExp(match,"g");
    h1Element.textContent= h1Element.textContent.replace(pattern,replacer);
}