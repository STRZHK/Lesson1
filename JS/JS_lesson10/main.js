// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let element = document.getElementById(`element`);
// element.innerText = `Hello World!`;
// element.style.backgroundColor = `yellow`;
// element.style.width = `200px`;
// element.style.height = `200px`;
// element.onclick = function (){
//     element.remove()
// }

//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let f1 = document.forms.formAge;
// console.log(f1);
// f1.onsubmit = function (e){
//     e.preventDefault();
//     let ageChecker = f1.age.value;
//     ageChecker > `18`? alert(`you're welcome`) : alert(`you're NOT allowed`);
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let f1 = document.forms.form1;
// let f2 = document.forms.form2;
//
// let button = document.getElementsByTagName(`button`);
// for (const buttonElement of button) {
//     buttonElement.addEventListener(`click`, function (e){
//     e.preventDefault();
//         console.log(`Name:`, f1.name.value);
//         console.log(`Surname:`,f1.surname.value);
//         console.log(`Age:`, f2.age.value);
//         console.log(`Status:`,f2.status.value);
//
//     })
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let table = document.forms.tableData;
table.onsubmit = function (e) {
    e.preventDefault();
    let line = tableData.line.value;
    let column = tableData.column.value;
    let value = tableData.value.value;

    let arr = [];
    arr.push(line, column, value)

}