import { loadTopic } from "./loadTopic";
let urlForPosts = 'http://localhost:3030/jsonstore/collections/myboard/posts';
let cancelBtn = document.querySelector('.cancel');
let postBtn = document.querySelector('.public');
let topicNameTextBoxElement = document.querySelector('#topicName');
let usernameTextBoxElement = document.querySelector('#username');
let postTextTextBoxElement = document.querySelector('#postText');
let topicContainerElement = document.querySelector('.topic-container');


cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    topicNameTextBoxElement.value = '';
    usernameTextBoxElement.value = '';
    postTextTextBoxElement.value = '';
})
postBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (topicNameTextBoxElement.value !== '' && usernameTextBoxElement.value !== '' && postTextTextBoxElement.value !== '') {
        const generateRandomId = () => Math.random().toString(36).substr(2, 10);
        let randomId = generateRandomId();
        let timeOfCreation = new Date().toISOString();
        let post = {
            topicName: topicNameTextBoxElement.value,
            username: usernameTextBoxElement.value,
            postText: postTextTextBoxElement.value,
            timeOfCreation: timeOfCreation,
            id: randomId
        }
        fetch(urlForPosts, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post),
        })
            .then(res => res.json())
            .then(post => {
                loadTopic(post);
                topicNameTextBoxElement.value = '';
                usernameTextBoxElement.value = '';
                postTextTextBoxElement.value = '';
            })
            .catch(err => console.log(err));
    }

})



