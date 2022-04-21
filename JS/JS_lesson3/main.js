// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// document.write(`<div>`)
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>some text inside</div>`);
// }
// document.write(`</div>`)


// let text = ['something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know','something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know'];
// document.write('<div>');
// for (let i = 0; i < text.length; i++) {
//     const textElement = text[i];
//     document.write(`<div>${text[i]}</div>`)
// }
// document.write('</div>');

// document.write(`<div>`)
// let i = 0;
// while (i < 20 ){
//     document.write(`<h1>some text inside</h1>`)
//     i++;
// }
// document.write(`</div>`)

// let text = ['something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know','something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know', 'something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know','something should I write', 'do not know what to fill', 'JS is not so simple', 'let me know something', 'parapapam', 'do not know'];
// document.write(`<div>`)
// let i = 0;
// while (i < text.length ){
//     document.write(`<h1>${text[i]}</h1>`)
//     i++;
// }
// document.write(`</div>`)


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
//
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
//     document.write(`<li>${listOfItems[i]}</li>`)
//
// }
// document.write(`</ul>`)


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


document.write(`<div class="product-card">`)

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<h3 class="product-title"> ${products[i].title}. Price - ${products[i].price}</h3>`);
    document.write(`<img src ="${products[i].image}" alt = "image" class = "product-image">`)

}

document.write(`</div>`)