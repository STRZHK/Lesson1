const conteiner = document.createElement(`div`);

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(value => {
    for (const item of value) {
        let content = document.createElement(`div`);
        content.classList.add(`content`);
        content.innerHTML = `
        <h3>ID: ${item.id}</h3>
        <h4>Name: ${item.name}</h4>`;

        let btn = document.createElement(`button`);
        btn.classList.add(`btn`);
        btn.innerText = `More details`

        btn.onclick = (e) => {
            e.preventDefault();
            localStorage.setItem('id', item.id);
            location.href = "user-details.html";
        }


        conteiner.appendChild(content);
        conteiner.appendChild(btn);

    }})

document.body.appendChild(conteiner);