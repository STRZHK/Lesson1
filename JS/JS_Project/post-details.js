let buttonBack = document.createElement(`button`);
buttonBack.innerText = `Back to start page`
buttonBack.onclick = () => {
    location.href = "index.html"
}
let buttonBackDiv = document.getElementsByClassName(`buttonBack`);
for (const item of buttonBackDiv) {
    item.appendChild(buttonBack)
}


let container = document.createElement(`div`);
container.classList.add(`container`);

let getMainContent = document.getElementsByClassName(`mainContent`);

const id = localStorage.getItem('id');
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
        container.appendChild(content)
    });

for (const idElement of getMainContent) {
    idElement.appendChild(container);
}


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




