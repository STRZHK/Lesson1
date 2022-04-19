// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 0; /*let a = 1; let a = -3;*/
// if (a === 0){
//     console.log(`CORRECT`)
// }
// else if (a !== 0){
//     console.log(`NOT CORRECT`)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let time = 60;
//
// if (time <= 14) {
//     if (time >= 0) {
//         console.log(`1 section`)
//     }}
// else if (time <= 29) {
//     if (time >= 15) {
//         console.log(`2 section`)
//     }}
// else if (time <= 44) {
//     if (time >= 30) {
//         console.log(`3 section`)
//     }}
// else if (time <= 59) {
//     if (time >= 45) {
//         console.log(`4 section`)
//     }}
// else{
//     console.log(`undefined`)
// }

// let day = prompt(`what a day?`);
//
// if (day <= 10) {
//     if (day >= 0) {
//         console.log(`1 decade`)
//     }}
// else if (day <= 20) {
//         if (day >= 11) {
//             console.log(`2 decade`)
//         }}
// else if (day <= 31) {
//     if (day >= 21) {
//         console.log(`3 decade`)
//     }}
// else{
//     console.log(`undefined`)
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let day = prompt(`Daily plan`)
//
// switch (day){
//     case '1':
//         document.write('<div><h1>monday</h1></div>')
//         break;
//     case '2':
//         document.write(`tuesday daily plan`)
//         break;
//     case '3':
//         document.write(`wednesday daily plan`)
//         break;
//     case '4':
//         document.write(`thursday daily plan`)
//         break;
//     case '5':
//         document.write(`friday daily plan`)
//         break;
//     case '6':
//         document.write(`saturday daily plan`)
//         break;
//     case '7':
//         document.write(`sunday daily plan`)
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = prompt(`specify the first number, please`)
// let b = prompt(`specify the second number, please`)
//
// if (a > b){
//     document.write(a)
//     console.log(a)
// }
// else if (a < b){
//     document.write(b)
//     console.log(b)
// }
// else if (a == b){
//     document.write(`the numbers are equal`)
//     console.log(`the numbers are equal`)
// }
// else{
//     document.write(`undefined`)
//     console.log(`undefined`)
// }

