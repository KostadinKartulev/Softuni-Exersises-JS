function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');
    let phonebookUlElement = document.getElementById('phonebook');
    let url = 'http://localhost:3030/jsonstore/phonebook';

    btnLoad.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                phonebookUlElement.innerHTML = '';
                Object.values(data).forEach(x => {
                    makePhonebookEntry(x);
                })
            })
            .catch(err => console.log(err))
    })
    function makePhonebookEntry({ person, phone, _id }) {
        let liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`;
        let deletebtn = document.createElement('button');
        deletebtn.value = 'Delete';
        deletebtn.textContent = 'Delete';
        deletebtn.addEventListener('click', () => {
            fetch(url + '/' + _id, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    liElement.remove();
                })
                .catch(err => console.log(err))

        })
        liElement.appendChild(deletebtn);
        phonebookUlElement.appendChild(liElement);
    }
    btnCreate.addEventListener('click', () => {
        let personTextbox = document.getElementById('person');
        let phoneTextbox = document.getElementById('phone');
        let person = personTextbox.value;
        let phone = phoneTextbox.value;
        let data = {
            person,
            phone
        }
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        phonebookUlElement.innerHTML = '';
                        Object.values(data).forEach(x => {
                            makePhonebookEntry(x);
                        })
                    })
                    .catch(err => console.log(err))



                personTextbox.value = '';
                phoneTextbox.value = '';
            })
    })
}

attachEvents();