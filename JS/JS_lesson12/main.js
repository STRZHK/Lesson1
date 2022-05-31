// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
//
//
// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(response => response.json())
// .then(value => {
//     let wrap = document.createElement(`div`);
//     wrap.classList.add(`wrap`)
//     for (const item of value) {
//         let div = document.createElement(`div`);
//         div.classList.add(`item`)
//
//         div.innerHTML = `
//         <h3>ID: ${item.id}</h3>
//         <h4>Title: ${item.title}</h4>
//         <h5>Body: ${item.body}</h5>`;
//
//     wrap.appendChild(div);
//     document.body.appendChild(wrap)
//     }
//
// })


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment

fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(value => {
    let wrap = document.createElement(`div`);
    wrap.classList.add(`wrap`)
    for (const item of value) {
        let div = document.createElement(`div`);
        div.classList.add(`item`)
        div.innerHTML = `
                        <h3>ID: ${item.id}</h3>
                        <h4>Name: ${item.name}</h4>
                        <h5>Email: ${item.email}</h5>
                        <h6>Body: ${item.body}</h6>
                        `;
        wrap.appendChild(div);
        document.body.appendChild(wrap)

    }
})