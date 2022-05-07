// // - Знайти та вивести довижину настипних стрінгових значень
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.length, b.length, c.length)
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let toUpperCase = a.toUpperCase();
// let toUpperCaseb = b.toUpperCase();
// let toUpperCasec = c.toUpperCase();
// console.log(toUpperCase, toUpperCaseb, toUpperCasec);
// // - Перевести до нижнього регістру настипні стрінгові значення
// let a1 = 'HELLO WORLD'; let b1 = 'LOREM IPSUM'; let c1 = 'JAVASCRIPT IS COOL';
//
// let toUpperCase1 = a1.toLowerCase();
// let toUpperCaseb1 = b1.toLowerCase();
// let toUpperCasec1 = c1.toLowerCase();
// console.log(toUpperCase1, toUpperCaseb1, toUpperCasec1);
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str1 = ' dirty string   ';
// console.log(str1.trim());
//
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(` `);
// console.log(arr);
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let map = array.map( value => value + `` );
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// let sort = nums.sort((a ,b) => {
//     if (a > b){
//         return 1;
//     }
//     if (a < b){
//         return -1;
//     }
//     return 0;
// })
// console.log(sort)
//
// let sort1 = nums.sort((a,b) => {
//     if (b > a) {
//         return 1;
//     }
//     if (b < a) {
//         return -1;
//     }
//     return 0;})
// console.log(sort1);


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
// let sortmonthDuration = coursesAndDurationArray.sort((a,b) => {
//     if (b.monthDuration > a.monthDuration) {
//         return 1;
//     }
//     if (b.monthDuration < a.monthDuration) {
//         return -1;
//     }
//     return 0;})
// console.log(sortmonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
// console.log(filter)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let gameCards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
];

// - знайти піковий туз
let findSpadeAce = gameCards.filter((item) => {
    if (item.cardSuit === `spade` && item.value === `ace`){
        return console.log(item);
    }
});

// - всі шістки
let findSix2 = gameCards.filter((item) => item.value === `6`)
console.log(findSix2);

// - всі червоні карти

let findRedCard = gameCards.filter((item) => item.color === `red`);
console.log(findRedCard);

// - всі буби

let findDiamond = gameCards.filter((item) => item.cardSuit === `diamond`);
console.log(findDiamond);

// - всі трефи від 9 та більше

let filterClubs = gameCards.filter((item) => {
    if (item.cardSuit === `clubs` && item.value !== `6` && item.value !== `7` && item.value !== `8`){
        return item;
    }
});
console.log(filterClubs);

