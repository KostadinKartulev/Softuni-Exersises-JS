function lockedProfile() {
    function profileCardMaker({ username, age, email }, id) {

        let wrapper = document.createElement('div');
        wrapper.classList.add('profile');
        wrapper.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
    <label>Lock</label>
    <input type="radio" name="user${id}Locked" value="lock" checked>
    <label>Unlock</label>
    <input type="radio" name="user${id}Locked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="user${id}Username" value="${username}" disabled readonly />
    <div class="user1Username">
        <hr>
        <label>Email:</label>
        <input type="email" name="user${id}Email" value="${email}" disabled readonly />
        <label>Age:</label>
        <input type="email" name="user${id}Age" value="${age}" disabled readonly />
    </div>`;
        let button = document.createElement('button');
        button.textContent='Show more';
        button.addEventListener('click', (e) => {

            let lockedRadioButton = e.currentTarget.parentNode.querySelector('input[value="lock"]');
            let hiddenDivElement = e.currentTarget.parentNode.querySelector('div:last-of-type');
            if (e.currentTarget.textContent === 'Show more' && lockedRadioButton.checked === false) {

                hiddenDivElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it';
            } else if (e.currentTarget.textContent === 'Hide it' && lockedRadioButton.checked === false) {
                hiddenDivElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more';
            }

        })
        wrapper.appendChild(button);
        let hiddenDivElement = wrapper.querySelector('div:last-of-type');
        hiddenDivElement.style.display = 'none';

        return wrapper;
    }
    let mainElement = document.querySelector('main');
    fetch("http://localhost:3030/jsonstore/advanced/profiles")
        .then(res => res.json())
        .then(profiles => {
            mainElement.innerHTML = '';
            Object.keys(profiles).forEach((profile, i) => {
                mainElement.appendChild(profileCardMaker(profiles[profile], i + 1));
            })
        })
        .catch(err=>console.log("Error"));
}