const container = document.createElement(`div`);

const id = localStorage.getItem('id');
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(item => {
                let content = document.createElement(`div`);
                content.classList.add(`content`);
                content.innerHTML = `
        <h3>ID: ${item.id}</h3>
        <h4>Name: ${item.name}</h4>
        <h4>Username: ${item.username}</h4>
        <h4>Email: ${item.email}</h4>
        <h4>Address:</h4>
        <ul class="addressItems">
        <li>Street: ${item.address.street}</li>
        <li>Suite: ${item.address.suite}</li>
        <li>City: ${item.address.city}</li>
        <li>Zipcode: ${item.address.zipcode}</li>
        </ul>
`;
            container.appendChild(content)
        });

document.body.appendChild(container)

