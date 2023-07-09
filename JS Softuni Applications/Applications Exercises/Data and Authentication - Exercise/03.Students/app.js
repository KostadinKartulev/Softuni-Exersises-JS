function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tableElement = document.getElementById('results');
    let tableBody = tableElement.querySelector('tbody');
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        
        let formlement = document.getElementById('form');
        let formData = new FormData(formlement);
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let facultyNumber = formData.get('facultyNumber');
        let grade = Number(formData.get('grade'));
        if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
            let infoObj = {
                firstName,
                lastName,
                facultyNumber,
                grade
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(infoObj),
            })
                .then(res => res.json())
                .then(data => {

                    fetch(url)
                        .then(res => res.json())
                        .then(students => {
                            tableBody.innerHTML = '';
                            Object.values(students).forEach(student => {
                                makeRow(student);
                            })

                        })
                        .catch(err => console.log(err))

                })
                .catch(err => console.log(err))

        }

    })
    function makeRow({ firstName, lastName, facultyNumber, grade }) {
        let rowElement = document.createElement('tr');
        let tableDataFirstNameElement = document.createElement('td');
        let tableDataLastNameElement = document.createElement('td');
        let tableDataFacultyNumberElement = document.createElement('td');
        let tableDataGradeElement = document.createElement('td');

        tableDataFirstNameElement.textContent = firstName;
        tableDataLastNameElement.textContent = lastName;
        tableDataFacultyNumberElement.textContent = facultyNumber;
        tableDataGradeElement.textContent = grade;

        rowElement.appendChild(tableDataFirstNameElement);
        rowElement.appendChild(tableDataLastNameElement);
        rowElement.appendChild(tableDataFacultyNumberElement);
        rowElement.appendChild(tableDataGradeElement);
        tableBody.appendChild(rowElement);

    }
}
attachEvents();