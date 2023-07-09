function attachEvents() {
    let submitBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let url = 'http://localhost:3030/jsonstore/messenger';

    submitBtn.addEventListener('click', () => {
        let authorTextboxElement = document.querySelector('input[name="author"]');
        let contentTextboxElement = document.querySelector('input[name="content"]');
        let author = authorTextboxElement.value;
        let content = contentTextboxElement.value;
        authorTextboxElement.value='';
        contentTextboxElement.value='';
        let data = {
            author,
            content
        }
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    })
    refreshBtn.addEventListener('click', () => {
        let textareaElement = document.getElementById('messages');
        textareaElement.removeAttribute('disabled');
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const lines = Object.values(data).map(x => `${x.author}: ${x.content}`);
                textareaElement.value = lines.join('\n');
                textareaElement.disabled=true;
            })
            .catch(err => console.log(err));
    })
}

attachEvents();