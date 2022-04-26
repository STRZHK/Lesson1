// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleP(a,b){
//     let result = a * b;
//     return result;
// }
// let result = rectangleP(2, 4)
// console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calculateCircle(r){
//     return  Math.PI * (r * r)
// }
//
// console.log(calculateCircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calcCylinder(h, r){
//     return  2 * Math.PI * h * r;
// }
//
// console.log(calcCylinder(10, 20))

// - створити функцію яка приймає масив та виводить кожен його елемент

// function iterator(something){
//     for (let number of something) {
//         console.log(number)
//     }
// }
// let elements = [10, 20, 30, 40, 50, 60]
//
// iterator(elements);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createTxt(){
//     const name = prompt(`Write your name`);
//     document.write(`<h1>Hello ${name}, nice to see you here</h1>`)
// }
// createTxt();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulCreator(){
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>text</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// ulCreator()

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function listofItems(){
//     document.write(`<ol>`)
//     for (const id of arguments) {
//         for (const idElement of id) {
//             document.write(`<li>${idElement}</li>`)
//         }
//     }
//     document.write(`<ol>`)
// }
// // let list = [12, `markus`, 5 > 6, true, `false`];
// // listofItems(list);
//
// let list2 = [5!==5, 6 < 6, false, `false`];
//
// listofItems(list2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function listPersonal() {
//     for (const argument of arguments) {
//         for (const argumentElement of argument) {
//             console.log(`${argumentElement.id}, ${argumentElement.name}, ${argumentElement.age}`)
//         }
//     }
// }
//
// let users = [
//     {id: 0, name: 'Sasha', age: 23},
//     {id: 1, name: 'Andrii', age: 40},
//     {id: 2, name: 'Paraska', age: 50},
//     {id: 3, name: 'Yarko', age: 22}
// ];
//
// listPersonal(users)

// - створити функцію яка повертає найменьше число з масиву

// function min() {
//     for (const argument of arguments) {
//         if (argument[0] < argument[1] && argument[0] < argument[2]) {
//             console.log(argument[0])
//         } else if (argument[1] < argument[0] && argument[1] < argument[2]) {
//             console.log(argument[1])
//         } else if (argument[2] < argument[0] && argument[2] < argument[1]) {
//             console.log(argument[2])
//         }
//         else {
//             console.log(Nan)
//         }
//     }
// }
// let numbers = [86465, 100500, 6464];
// min(numbers)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function add(){
//     for (const argument of arguments) {
//         return argument[0] + argument[1] + argument[2];
//     }
// }
// let a = [100, 200, 0];
// console.log(add(a))