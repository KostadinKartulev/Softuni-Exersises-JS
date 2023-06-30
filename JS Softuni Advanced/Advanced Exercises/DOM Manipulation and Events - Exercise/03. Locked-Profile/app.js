function lockedProfile() {
    let buttonHideShowElements = document.querySelectorAll('#main > div > button');
    for (let i = 0; i < buttonHideShowElements.length; i++) {
        buttonHideShowElements[i].addEventListener('click', function (e) {
            let chekboxLocked = e.currentTarget.parentNode.querySelector('input[value="lock"][type="radio"]');
            if (e.currentTarget.textContent === 'Show more') {
                if (chekboxLocked.checked) {
                    return;
                } else {
                    let hiddenFields = document.querySelector(`#user${i + 1}HiddenFields`);
                    hiddenFields.style.display = 'block';
                    e.currentTarget.textContent = 'Hide it';
                }
            } else if (e.currentTarget.textContent === 'Hide it') {
                if (chekboxLocked.checked) {
                    return;
                } else {
                    let hiddenFields = document.querySelector(`#user${i + 1}HiddenFields`);
                    hiddenFields.style.display = 'none';
                    e.currentTarget.textContent = 'Show more';
                }
            }
        })

    }

}