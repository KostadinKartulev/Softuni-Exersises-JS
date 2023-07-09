export function loadTopic(post) {
   
    let template = `<div id="${post.id}" class="topic-name">
        <a href="./theme-content.html" class="normal">
            <h2>${post.topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.timeOfCreation}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>


        </div>
    </div>`

    var divNameWrapper = document.createElement("div");
    divNameWrapper.classList.add("topic-name-wrapper");
    divNameWrapper.innerHTML = template;
    topicContainerElement.appendChild(divNameWrapper);

}
topicContainerElement.addEventListener('click', (e) => {
    if (e.target.tagName==='H2') {
        let elementId=e.target.parentNode.parentNode.id;
        localStorage.setItem('idOfClickedTopic',elementId);
    }
})