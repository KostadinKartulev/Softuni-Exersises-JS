let answerElement = document.querySelector('.answer-comment');
let urlForComments = 'http://localhost:3030/jsonstore/collections/myboard/comments';
let postElement=document.querySelector('.comment');

export function loadComment() {
    let form = answerElement.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData=new FormData(e.currentTarget);
        let postText=formData.get('postText');
        let username=formData.get('username');
        let timeOfCreation = new Date().toISOString();
        let commentObj={postText,username,timeOfCreation};
        fetch(urlForComments,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(commentObj),
        })
        .then(res=>res.json())
        .then(data=>{
            let template=`<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${username}</strong> commented on <time>${timeOfCreation}</time></p>
                <div class="post-content">
                    <p>${postText}</p>
                </div>
            </div>
        </div>`;
        let div=document.createElement('div');
        div.classList.add('user-comment');
        div.innerHTML=template;
        postElement.appendChild(div);
        })
    })
}