const container = document.createElement(`div`);

const id = localStorage.getItem('id');
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
        <h4>Company:</h4>
                <li>Name: ${item.company.name}</li>
                <li>Bs: ${item.company.bs}</li>
                <li>catchPhrase: ${item.catchPhrase}</li>

        <h4>Website: ${item.website}</h4>
        <h4>Address:</h4>
        <ul class="addressItems">
        <li>Street: ${item.address.street}</li>
        <li>Suite: ${item.address.suite}</li>
        <li>City: ${item.address.city}</li>
        <li>Zipcode: ${item.address.zipcode}</li>
        <li>Zipcode: ${item.address.geo.lat}</li>
        <li>Zipcode: ${item.address.geo.lng}</li>
        </ul>
`;
            container.appendChild(content);



        })

document.body.appendChild(container)


let buttonBack = document.getElementsByClassName(`back`);
for (const buttonBackElement of buttonBack) {
    buttonBackElement.onclick = () => {
        location.href = "index.html"
    }
}



fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(value => {
        let postBtn = document.getElementsByClassName(`postBtn`);
        for (const item of postBtn) {
            item.onclick = () => {
                let divtitle = document.createElement(`div`);
                divtitle.innerText = `${value}`;

            }
        }

    })


