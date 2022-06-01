const conteiner = document.createElement(`div`);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(value => {
        for (const item of value) {
            let content = document.createElement(`div`);
            content.classList.add(`content`);
            content.innerHTML = `
        <h3>ID: ${item.id}</h3>
        <h4>Name: ${item.name}</h4>
        <h4>Username: ${item.username}</h4>
        <h4>Email: ${item.email}</h4>
        <h4>Address: ${item.address}</h4>

`;
            conteiner.appendChild(content)
    }});

document.body.appendChild(conteiner)

