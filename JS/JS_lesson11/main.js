// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let form1 = document.forms.form1;
// console.log(form1);
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     let name = form1.name.value;
//     let age = form1.age.value;
//
//     localStorage.setItem(`name`, name);
//     localStorage.setItem(`age`, age);
//
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carForm = document.forms.formCar;
console.log(carForm);

carForm.onsubmit = function (e){
    e.preventDefault();

    let arr = [];
    let module = carForm.module.value;
    let type = carForm.type.value;
    let volume = carForm.volume.value;

    arr.push(module, type, volume);

    // console.log(arr);

    localStorage.setItem(`carForm`, JSON.stringify(arr));
}
