import { loadComment } from "./loadComment.js";
let postElement=document.querySelector('.comment');
let topicNameH2Element=document.querySelector('.theme-name h2');
let urlForPosts = 'http://localhost:3030/jsonstore/collections/myboard/posts';
function loadPost() {
    let idOfClickedTopic=localStorage.getItem('idOfClickedTopic');
    fetch(urlForPosts)
    .then(res=>res.json())
    .then(data=>{
        let post=Object.values(data).filter(x=>x.id===idOfClickedTopic)[0];
        topicNameH2Element.textContent=post.topicName;
        let template=`<img src="./static/profile.png" alt="avatar">
        <p><span>${post.username}</span> posted on <time>${post.timeOfCreation}</time></p>
        <p class="post-content">${post.postText}</p>`
        let div=document.createElement('div');
        div.classList.add('header');
        div.innerHTML=template;
        postElement.appendChild(div);
    })
}
loadPost();
loadComment();



