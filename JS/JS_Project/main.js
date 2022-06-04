const conteiner = document.createElement(`div`);
conteiner.classList.add(`conteiner`)

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(value => {
    for (const item of value) {
        let content = document.createElement(`div`);
        content.classList.add(`content`);
        content.innerHTML = `
        <h3>ID: ${item.id}</h3>
        <h4>${item.name}</h4>
`;
        let btnDiv = document.createElement(`div`);
        btnDiv.classList.add(`btnDiv`);
        let btn = document.createElement(`button`);
        btn.classList.add(`btn`);
        btn.innerText = `About User`

        btn.onclick = (e) => {
            e.preventDefault();
            localStorage.setItem('id', item.id);
            location.href = "user-details.html";
        }


        btnDiv.appendChild(btn);
        content.appendChild(btnDiv);
        conteiner.appendChild(content);

    }})


document.body.appendChild(conteiner);
