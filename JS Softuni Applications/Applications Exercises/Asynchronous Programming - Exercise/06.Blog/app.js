function attachEvents() {

    function makeAndAttachOption(elementToAttachTo, { id: value, title }) {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = title;
        elementToAttachTo.appendChild(option);
    }

   

    let baseURL = 'http://localhost:3030/jsonstore/blog';
    let loadBtnElement = document.getElementById('btnLoadPosts');
    loadBtnElement.addEventListener('click', () => {
        fetch(baseURL + '/posts')
            .then(res => res.json())
            .then(posts => {
                let postsSelectElement = document.getElementById('posts');
                Object.values(posts).forEach(x => {
                    makeAndAttachOption(postsSelectElement, x);
                })
            })
            .catch(err => console.log(err));
    })

    let viewBtnElemt = document.getElementById('btnViewPost');
    viewBtnElemt.addEventListener('click', () => {
        let postsSelectElement = document.getElementById('posts');
        let selectedOptionElement = postsSelectElement.options[postsSelectElement.selectedIndex];
        let selectedPostId = selectedOptionElement.value;

        let h1Element = document.getElementById('post-title');
        h1Element.textContent = selectedOptionElement.textContent;

        fetch(baseURL + '/posts')
            .then(res=>res.json())
            .then(posts=>{
                let selectedPost=Object.values(posts).find((x) => selectedOptionElement.textContent===x.title);
                    let pElement = document.getElementById('post-body');
                    pElement.textContent = selectedPost.body;
                
            })
            .catch(err => console.log(err));


        fetch(baseURL + '/comments')
            .then(res => res.json())
            .then(comments => {
                comments = Object.values(comments).filter((comment) => {
                    if (comment.postId === selectedPostId) {
                        return comment;
                    }
                })
                let postCommentsUlElement = document.getElementById('post-comments');
                postCommentsUlElement.innerHTML = '';
                comments.forEach(x => {
                    let liElement = document.createElement('li');
                    liElement.textContent = x.text;
                    postCommentsUlElement.appendChild(liElement);
                })

            })
            .catch(err => console.log(err));

    })

}
attachEvents();