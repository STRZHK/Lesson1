// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// let getContent = document.getElementById(`content`)
// console.log(getContent)

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// let getText = document.getElementById(`content`);
// console.log(getText.innerText);

// -- отримує текст з блоку з id "rules"
// let getTxt = document.getElementById(`rules`);
// console.log(getTxt.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// let getText = document.getElementById(`content`);
// getText.innerText = `I have changed the text`;

// -- замініть текст параграфа з id 'rules' на будь-який інший
// let getTxt = document.getElementById(`rules`);
// getTxt.innerText = `I have changed the text on rules' id`

// -- змініть кожному елементу колір фону на червоний
// let allDivs = document.getElementsByTagName(`div`)
// let allParag = document.getElementsByTagName(`p`)
// let allLi = document.getElementsByTagName(`li`)

/*variant 1*/
// for (const div of allDivs) {
//     div.style.backgroundColor = `red`
// }
//
// for (const parag of allParag) {
//     parag.style.backgroundColor = `red`
// }
//
// for (const allLiElement of allLi) {
//     allLiElement.style.backgroundColor = `red`
// }

/*variant 2*/
// let conteiner = [];
// conteiner.push(allDivs, allParag, allLi);
//
// for (const conteinerElement of conteiner) {
//     for (const conteinerElementElement of conteinerElement) {
//         conteinerElementElement.style.backgroundColor = `red`
//     }
// }

// -- змініть кожному елементу колір тексту на синій
// let allDivs = document.getElementsByTagName(`div`)
// let allParag = document.getElementsByTagName(`p`)
// let allLi = document.getElementsByTagName(`li`)
//
// let conteiner = [];
// conteiner.push(allDivs, allParag, allLi);
//
// for (const conteinerElement of conteiner) {
//     for (const conteinerElementElement of conteinerElement) {
//         conteinerElementElement.style.color = `blue`
//     }
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let getIdRules = document.getElementById(`rules`);
// console.log(getIdRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let ChangeTxtColor = document.getElementsByClassName(`fc_rules`);
// console.log(ChangeTxtColor);
// for (const item of ChangeTxtColor) {
//     item.style.color = `red`
// }



// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const getClass = document.getElementById(`main_header`)
// getClass.className = `groupName`;
// console.log(getClass);

// b) робить шириниу елементу ul 400px
// const changeUl = document.getElementsByTagName(`ul`);
// for (const item of changeUl) {
//     item.style.width = `400px`
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const changeWidth = document.getElementsByClassName(`linkList`);
// for (const item of changeWidth) {
//     item.style.width = `50%`
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// const element1 = document.getElementsByClassName(`listElement2`);
// for (const item of element1) {
//     item.innerHTML = `<p>NEW TEXT FOR listElement2</p>`
// }
//
// const element = document.getElementsByClassName(`listElement2`);
// for (const item of element) {
//     console.log(item.innerText)
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let getLi = document.getElementsByTagName(`li`);
// for (const li of getLi) {
//     li.style.backgroundColor = `silver`
//     li.style.marginBottom = `5px`
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const getA = document.getElementsByTagName(`a`);
// for (const aElement of getA) {
//     aElement.className = `anchor`
//     console.log(aElement)
// }
// const letCheckNewCLass = document.getElementsByClassName(`anchor`);
// console.log(letCheckNewCLass)

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const getElement = document.getElementsByTagName(`a`);
// for (const item of getElement) {
//     item.innerText === `link3` ? item.style.fontSize = `40px` : false ;
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const getA = document.getElementsByTagName(`a`);
// for (const aElement of getA) {
//     aElement.className = `element_${aElement.innerText}`
//     console.log(aElement)
// }
// const letCheckNewCLass = document.getElementsByClassName(`anchor`);
// console.log(letCheckNewCLass)

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const getSubHeaders = document.getElementsByClassName(`sub-header`);
// let color = prompt(`What a color?`)
// for (const item of getSubHeaders) {
//     item.style.backgroundColor = `${color}`
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const getSubHeaders = document.getElementsByClassName(`sub-header`);
// let color = prompt(`What a color?`)
// for (const item of getSubHeaders) {
//     item.innerText === `content 2 segment`? item.style.color = `${color}` : false ;
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const getContent = document.getElementsByClassName(`content_1`);
// let text = prompt(`Please, write something here`);
// for (const item of getContent) {
//     item.innerText = `${text}`
// }

// l) отримати елементи p та змінити їм padding на 20px
// const getP = document.getElementsByTagName(`p`);
// for (const pElement of getP) {
//     pElement.style.padding = `20px`
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const getText2 = document.getElementsByClassName(`text2`);
// for (const item of getText2) {
//     item.innerText = `march - 2022`
// }