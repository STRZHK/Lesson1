const container = document.createElement(`div`);

const id = localStorage.getItem('id');
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(item => {
            console.log(item);
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
                <li>catchPhrase: ${item.company.catchPhrase}</li>

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




let postBtn = document.getElementsByClassName(`postBtn`);
for (const button of postBtn) {
    button.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(value => {
                let postConteiner = document.createElement(`div`);
                postConteiner.innerHTML = `<br><h2>Posts of User</h2>`;
                for (const element of value) {
                    let postDiv = document.createElement(`div`);
                    postDiv.innerHTML = `<hr><li>${element.title}</li>`
                    postConteiner.appendChild(postDiv);

                    let btnPostUser = document.createElement(`button`);
                    btnPostUser.classList.add(`btnPostUser`);
                    btnPostUser.innerText = `Post details`;
                    postDiv.appendChild(btnPostUser);

                    btnPostUser.onclick = (e) => {
                        e.preventDefault();
                        localStorage.setItem('id', element.id);
                        location.href = "post-details.html";
                    }

                    document.body.appendChild(postConteiner);

                }})
    }
}


