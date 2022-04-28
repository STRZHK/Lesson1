// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let fn = (array) => {
//     let res = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         res = (array[i] + res) / array.length;
//     }
//     return console.log(res);
// }
//
// let array = [1, 1, 1];
// fn(array);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let fn = () => {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const item of arguments) {
//         if (max > item){ max = item}
//         if (min < item){ min = item}
//     }
//     console.log(max);
//     return min;
// }
// let arguments = [10, 20, 31, 4, 6]
// fn(arguments);

// - створити функцію яка заповнює масив рандомними числами

// let fn = () => {
//     let array = [];
//     for (let i = 0; i < 15; i++) {
//         const arrayElement = array[i];
//         console.log(Math.round(Math.random()*100))
//     }
//     return array;
// };
// fn()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let fn = (i, limit) => {
//     let array =[];
//     for (let i = 0; i < limit; i++) {
//         const arrayElement = array[i];
//         console.log(Math.round(Math.random()*100))
//     }
//     return array;
// }
// console.log(fn(0, 100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let fn = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         return console.log(array[2],array[1],array[0])
//     }
// }
// let array = [1, 2, 3]
// fn(array)



// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let fn = (a,b) => a*b;
// console.log(fn(2,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let fn = (r) => Math.PI * (r * r);
// console.log(fn(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let fn = (h, r) => 2 * Math.PI * h * r;
// console.log(fn(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let fn = (elements) => {
//     for (const element of elements) {
//         console.log(element);
//     }
// }
// let elements = [10, 20, 30, 40, 50, 60];
// fn(elements);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let text = () => document.write(`<h1>Hello, nice to see you here</h1>`);
// text();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let fn = () =>{
//         document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         let a = "text";
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// fn();

// / - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = (array) => {
//     document.write(`<ol>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`<ol>`)
// }
// let text = [12, `markus`, 5 > 6, true, `false`];
// list(text);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let fn = () => {
//     for (const user of users) {
//         console.log(`id ${user.id}, name ${user.name}, age ${user.age}`)
//     }
// }
// let users = [
//     {id: 0, name: 'Sasha', age: 23},
//     {id: 1, name: 'Andrii', age: 40},
//     {id: 2, name: 'Paraska', age: 50},
//     {id: 3, name: 'Yarko', age: 22}
// ];
// fn(users);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [86465, 100500, 6464];
//
// let fn = () => {
//     let min = numbers[0];
//     for (const minElement of numbers) {
//         if (minElement < min) { min = minElement}
//     }
//     return console.log(min)
// }
// fn(numbers);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let fn = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return console.log(sum)
// }
// let a = [100, 200, 50, 50];
// fn(a);
