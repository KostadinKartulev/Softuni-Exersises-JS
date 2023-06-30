function getArticleGenerator(articles) {
   let [...arrWithTexts]=articles;
    return function() {
        if (arrWithTexts.length==0) {
            return;
        }
        let articleElement=document.createElement('article');
        articleElement.textContent=arrWithTexts.shift();
        let divToDisplayElement=document.getElementById('content');
        divToDisplayElement.appendChild(articleElement);
    }
}
