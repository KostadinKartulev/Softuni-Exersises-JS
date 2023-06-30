function solve() {
    let btnAddElement = document.getElementById('add');

    btnAddElement.addEventListener('click', function (e) {
        e.preventDefault();
        let taskElement = document.getElementById('task');
        let decriptionElement = document.getElementById('description');
        let dateElement = document.getElementById('date');

        if (taskElement.value == "" && decriptionElement.value == "" && dateElement.value == "") {
            return;
        }
        let articleElement = document.createElement('article');
        let headingElement = document.createElement('h3');
        headingElement.textContent = taskElement.value;
        let para1Element = document.createElement('p');
        para1Element.textContent = `Description: ${decriptionElement.value}`;
        let para2Element = document.createElement('p');
        para2Element.textContent = `Due Date: ${dateElement.value}`;
        let divElement = document.createElement('div');
        divElement.className = 'flex';
        let btnStartElement = document.createElement('button');
        btnStartElement.className = 'green';
        btnStartElement.textContent = 'Start';
        btnStartElement.addEventListener('click', function (e) {
            let divWithArticlesInProgressElement = document.querySelector('#in-progress');
            let currentArticleElement = e.currentTarget.parentElement.parentElement;
            if (e.currentTarget.textContent == 'Start') {
                let secondBtnElement = e.currentTarget.parentElement.querySelector('.red');
                secondBtnElement.classList.remove(...secondBtnElement.classList);
                secondBtnElement.classList.add('orange');
                secondBtnElement.textContent = 'Finish';
                e.currentTarget.className = 'red';
                e.currentTarget.textContent = 'Delete';
                divWithArticlesInProgressElement.appendChild(currentArticleElement);
            } else if (e.currentTarget.textContent == 'Delete') {
                currentArticleElement.remove();
            }
        })
        let btnDeleteElement = document.createElement('button');
        btnDeleteElement.className = 'red';
        btnDeleteElement.textContent = 'Delete';
        btnDeleteElement.addEventListener('click', function (e) {
            let divWithArticlesInCompleteElement = document.querySelector('.green').parentElement.parentElement.querySelector(':nth-child(2)');
            let currentArticleElement = e.currentTarget.parentElement.parentElement;
            if (e.currentTarget.textContent == 'Finish') {
                let divWithButtonsElement = e.currentTarget.parentElement;
                divWithButtonsElement.remove();
                divWithArticlesInCompleteElement.appendChild(currentArticleElement);
            } else if (e.currentTarget.textContent == 'Delete') {
                currentArticleElement.remove();
            }
        })
        articleElement.appendChild(headingElement);
        articleElement.appendChild(para1Element);
        articleElement.appendChild(para2Element);
        divElement.appendChild(btnStartElement);
        divElement.appendChild(btnDeleteElement);
        articleElement.appendChild(divElement);

        let divWithArticlesInOpenElement = document.querySelector('.orange').parentElement.parentElement.querySelector(':nth-child(2)');
        divWithArticlesInOpenElement.appendChild(articleElement);
    })
}