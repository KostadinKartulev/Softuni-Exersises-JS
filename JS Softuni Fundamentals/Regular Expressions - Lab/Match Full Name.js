function matchFullName(input) {
    let regExp=/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches=input.match(regExp);
    
    console.log(matches.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
