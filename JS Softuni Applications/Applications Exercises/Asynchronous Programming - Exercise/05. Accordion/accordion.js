function solution() {
    function makeAccordion({ title, _id: id }) {

        let template = `<div class="head">
        <span>${title}</span>
        <button class="button" id="${id}">More</button>
        </div>
        <div class="extra">
        <p></p>
        </div>`;
        let divAccordion = document.createElement('div');
        divAccordion.innerHTML = template;
        divAccordion.classList.add('accordion');

        return divAccordion;
    }
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(res => res.json())
        .then(articles => {
            let mainElement = document.getElementById('main');
            articles.forEach(article => {
                mainElement.appendChild(makeAccordion(article));
            });
            let buttonsElements = document.querySelectorAll('.button');
            buttonsElements.forEach(x => {
                x.addEventListener('click', (e) => {

                    let extraInfoDiv = e.currentTarget.parentElement.parentElement.querySelector('.extra');
                    if (e.currentTarget.textContent == "More") {
                        let extraInfoParagraph = extraInfoDiv.querySelector('p');
                        let idOfButton = e.currentTarget.getAttribute('id');
                        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${idOfButton}`)
                            .then(res => res.json())
                            .then(article => {
                                extraInfoParagraph.textContent = article.content;
                            })
                            .catch(err => console.log(err));
                        extraInfoDiv.style.display = "block";
                        e.currentTarget.textContent = "Less";
                    } else if (e.currentTarget.textContent == "Less") {
                        extraInfoDiv.style.display = "none";
                        e.currentTarget.textContent = "More";
                    }
                })
            })
        })
        .catch(err => console.log(err));
}
solution();