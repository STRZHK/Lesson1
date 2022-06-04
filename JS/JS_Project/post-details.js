let buttonBack = document.createElement(`button`);
buttonBack.innerText = `Back to start page`
buttonBack.onclick = () => {
    location.href = "index.html"
}
document.body.appendChild(buttonBack)

const container = document.createElement(`div`);
container.classList.add(`postDetails`);
container.style.padding = `10px`;

const id = localStorage.getItem('id');
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(item => {
        let content = document.createElement(`div`);
        content.classList.add(`content`);
        content.innerHTML = `
        <h3><b>ID:</b> ${item.id}</h3>
        <h4>Title: ${item.title}</h4>
        <h4>Body: ${item.body}</h4>
        <br>
`;
        container.appendChild(content);
        document.body.appendChild(container);

    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(value => {
        let commnetsDiv = document.createElement(`div`);
        commnetsDiv.classList.add(`commnetsDiv`)
            for (const item of value) {
                    let postComments = document.createElement(`div`);
                    postComments.classList.add(`postCommnets`);
                    postComments.innerHTML = `
        <h4>ID: ${item.id}</h4>
        <p><b>Name:</b> ${item.name}</p>
        <p><b>Email:</b> ${item.email}</p>
        <p><b>Body:</b> ${item.body}</p>
        <hr>
`;
                commnetsDiv.appendChild(postComments);
                document.body.appendChild(commnetsDiv);
            }
    });

document.getElementById("content").firstElementChild.appendChild(`content`);



