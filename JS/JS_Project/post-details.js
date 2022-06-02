const container = document.createElement(`div`);

const id = localStorage.getItem('id');
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(item => {
        console.log(item);
        let content = document.createElement(`div`);
        content.classList.add(`content`);
        content.innerHTML = `
        <h3>ID: ${item.id}</h3>
        <h4>Username: ${item.title}</h4>
        <p>Email: ${item.body}</p>
`;
        container.appendChild(content);
        console.log(item);

    });

document.body.appendChild(container)
