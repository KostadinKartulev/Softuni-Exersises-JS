function attachEvents() {
    let tableBodyElement = document.querySelector('tbody');
    tableBodyElement.innerHTML = '';
    let loadBtnElement = document.getElementById('loadBooks');
    let formElement = document.querySelector('form');
    let h3FromFormElement = formElement.querySelector('h3');
    let titleFromFormElement = formElement.querySelector('input[name="title"]');
    let authorFromFormElement = formElement.querySelector('input[name="author"]');
    let submitBtnFromFormElement = formElement.querySelector('button');
    let url = 'http://localhost:3030/jsonstore/collections/books';
    let idOfBookToEdit = null;

    loadElements();

    loadBtnElement.addEventListener('click', loadElements);
    function loadElements() {

        fetch(url)
            .then(res => res.json())
            .then(books => {
                tableBodyElement.innerHTML = '';

                Object.entries(books).forEach(kvp => {
                    let bookId = kvp[0];
                    let bookInfo = kvp[1];

                    let rowElement = document.createElement('tr');
                    let tableDataAuthorElement = document.createElement('td');
                    let tableDataTitleElement = document.createElement('td');
                    let tableDataButtonsElement = document.createElement('td');
                    let editButtonElement = document.createElement('button');
                    let deleteButtonElement = document.createElement('button');

                    editButtonElement.textContent = 'Edit';
                    deleteButtonElement.textContent = 'Delete';
                    tableDataAuthorElement.textContent = bookInfo.author;
                    tableDataTitleElement.textContent = bookInfo.title;
                    rowElement.id = bookId;
                    editButtonElement.addEventListener('click', (e) => {
                        let title = e.currentTarget.parentNode.parentNode.querySelector('td:first-child').textContent;
                        let author = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
                        idOfBookToEdit = e.currentTarget.parentNode.parentNode.id;

                        h3FromFormElement.textContent = 'Edit FORM';
                        titleFromFormElement.value = title;
                        authorFromFormElement.value = author;
                        submitBtnFromFormElement.textContent = 'Save';
                    })
                    deleteButtonElement.addEventListener('click', (e) => {
                        let idOfCurrElement = e.currentTarget.parentNode.parentNode.id;
                        let currTableRow = e.currentTarget.parentNode.parentNode // it should be here
                        fetch(url + '/' + idOfCurrElement, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(data => {
                                // !!!!! Good to know:
                                // !!!!! let currTableRow = e.currentTarget.parentNode.parentNode; 
                                //this does not work,it should be set into a variable outside the fetch to be accessible,
                                //if not the e.currentTarget is not accesible in fetch !!!!!!!!
                                currTableRow.remove();
                            })
                            .catch(err => console.error(err));

                    })

                    tableDataButtonsElement.appendChild(editButtonElement);
                    tableDataButtonsElement.appendChild(deleteButtonElement);
                    rowElement.appendChild(tableDataTitleElement);
                    rowElement.appendChild(tableDataAuthorElement);
                    rowElement.appendChild(tableDataButtonsElement);
                    tableBodyElement.appendChild(rowElement);
                })
            })
            .catch(err => console.error(err));
    }

    submitBtnFromFormElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (authorFromFormElement.value === '' || titleFromFormElement.value === '') {
            return;
        }
        let newBook = {
            author: authorFromFormElement.value,
            title: titleFromFormElement.value,
        }
        let options = {
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newBook)
        };

        if (e.currentTarget.textContent === 'Submit') {
            options.method = 'POST';
            idOfBookToEdit = '';
        } else if (e.currentTarget.textContent === 'Save') {
            options.method = 'PUT';
            submitBtnFromFormElement.textContent = 'Submit';
            h3FromFormElement.textContent = 'FORM';
            idOfBookToEdit = '/' + idOfBookToEdit;
        }
        authorFromFormElement.value = '';
        titleFromFormElement.value = '';

        fetch(url + idOfBookToEdit, options)
            .then(res => res.json())
            .then(data => {
                loadElements();
            })
            .catch(err => console.error(err));
    })
}
attachEvents();