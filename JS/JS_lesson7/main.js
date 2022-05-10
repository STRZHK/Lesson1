// class User { constructor (id, Name, Surname , email, phone) {
//     this.id = id
//     this.Name = Name
//     this.Surname = Surname
//     this.email = email
//     this.phone = phone
// }}
//
// const newUser1 = new User (26, `Sasha`, `Stryzhak`, `strzhk@gmail.com`, 38063636363);
// const newUser2 = new User (2, `Andrii`, `Sterog`, `rejgor@gmail.com`, 38063636363);
// const newUser3 = new User (3, `Pasha`, `Sgoihroi`, `soejgp4j@gmail.com`, 38063636363);
// const newUser4 = new User (42, `Yarko`, `Hoejf`, `grjp4@gmail.com`, 38063636363);
// const newUser5 = new User (5, `Nastya`, `Kodihwih`, `oopjpwojg@gmail.com`, 38063636363);
// const newUser6 = new User (6, `Lilia`, `Pvroej`, `wejgopw@gmail.com`, 38063636363);
// const newUser7 = new User (17, `Luiza`, `Perhgieur`, `epgojp@gmail.com`, 38063636363);
// const newUser8 = new User (8, `Petro`, `Wioshoi`, `ojfpw@gmail.com`, 38063636363);
// const newUser9 = new User (19, `Slavek`, `Jegjpo`, `pwjwpeop@gmail.com`, 38063636363);
// const newUser10 = new User (10, `Patricia`, `Leoighri`, `poejfjgp3@gmail.com`, 38063636363);
//
// let UserList = [];
// let fn = (newUser) => UserList.push(newUser);
// fn(newUser1)
// fn(newUser2)
// fn(newUser3)
// fn(newUser4)
// fn(newUser5)
// fn(newUser6)
// fn(newUser7)
// fn(newUser8)
// fn(newUser9)
// fn(newUser10)
// console.log(UserList);
//
// let filter = UserList.filter((value) => value.id % 2 === 0);
// console.log(filter);
//
// let sortUserList = UserList.sort((a,b) => {
//     if (a.id > b.id) {
//         return 1;
//     }
//     if (a.id < b.id) {
//         return -1;
//     }
//     return 0;})
// console.log(sortUserList);


// class Client { constructor (id, Name, Surname , email, phone,order) {
//     this.id = id
//     this.Name = Name
//     this.Surname = Surname
//     this.email = email
//     this.phone = phone
//     this.order = order
// }}
//
// const client1 = new Client (26, `Sasha`, `Stryzhak`, `strzhk@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`]);
// const client2 = new Client (2, `Andrii`, `Sterog`, `rejgor@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`]);
// const client3 = new Client (3, `Pasha`, `Sgoihroi`, `soejgp4j@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`, `product 4`]);
// const client4 = new Client (42, `Yarko`, `Hoejf`, `grjp4@gmail.com`, 38063636363, [`prodcut 1`]);
// const client5 = new Client (5, `Nastya`, `Kodihwih`, `oopjpwojg@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`]);
// const client6 = new Client (6, `Lilia`, `Pvroej`, `wejgopw@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`, `product 4`, `product 5`]);
// const client7 = new Client (17, `Luiza`, `Perhgieur`, `epgojp@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`]);
// const client8 = new Client (8, `Petro`, `Wioshoi`, `ojfpw@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`, `product 4`, `product 5`, `product 6`]);
// const client9 = new Client (19, `Slavek`, `Jegjpo`, `pwjwpeop@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`, `product 3`, `product 4`, `product 5`, `product 6`, `product 7`, `product 8`, `product 9`]);
// const client10 = new Client (10, `Patricia`, `Leoighri`, `poejfjgp3@gmail.com`, 38063636363, [`prodcut 1`, `prodcut 2`]);
//
// let ClientList = [];
// let fn = (newClient) => ClientList.push(newClient);
// fn(client1)
// fn(client2)
// fn(client3)
// fn(client4)
// fn(client5)
// fn(client6)
// fn(client7)
// fn(client8)
// fn(client9)
// fn(client10)
// console.log(ClientList);
//
//
// let sortClientOrder = ClientList.sort((a,b) => {
//     if (a.order > b.order) {
//         return 1;
//     }
//     if (a.order < b.order) {
//         return -1;
//     }
//     return 0;})
// console.log(sortClientOrder);



// function Car(model, producer, year, MaxSpeed, EngineCapacity ) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.MaxSpeed = MaxSpeed
//     this.EngineCapacity = EngineCapacity
//     this.driver1 = `driver`
//
//     this.driver = function (){
//             console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`)
//     }
//     this.driver();
//
//     this.info = function (){
//     console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Max Speed - ${this.MaxSpeed}, EngineCapacity - ${this.EngineCapacity}`)
// }
//     this.info()
//
//     this.increaseMaxSpeed = function (newSpeed){
//     return this.MaxSpeed += newSpeed
// }
//     this.increaseMaxSpeed(200)
//
//     this.changeYear = function (newValue) {
//     this.year = newValue;
// }
//     this.changeYear(2012)
//
//     this.addDriver = function (Driver){
//     this.driver1 = Driver;
// }
//     let Driver = {
//     name: `Sanshos`,
//     age: 23,
//     status: `free`
// }
//     this.addDriver(Driver)
//
// }
// let carTest = new Car (`s`, `Tesla`, 2022 , 220,10);
// console.log(carTest);


// через клас:

// class Car { constructor(model, producer, year, MaxSpeed, EngineCapacity ) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.MaxSpeed = MaxSpeed
//     this.EngineCapacity = EngineCapacity
//     this.driver = `driver`;
// }
// drive (){
//     console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`)
// }
//
// info (){
//     console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Max Speed - ${this.MaxSpeed}, EngineCapacity - ${this.EngineCapacity}`)
// }
// increaseMaxSpeed (newSpeed){
//     return this.MaxSpeed += newSpeed
// }
//
// changeYear (newValue) {
//     this.year = newValue;
// }
// addDriver (driver){
//     this.driver = driver
// }
// }
// let carTest = new Car (`s`, `Tesla`, 2022 , 220,10);

// carTest.drive()
// carTest.info()
// console.log(carTest.increaseMaxSpeed(50));
// // console.log(carTest);
// carTest.changeYear(2010)

// let driver = {
//     name: `Sanshos`,
//     age: 23,
//     status: `free`
// }
//
// carTest.addDriver(driver)
// console.log(carTest);


class Cinderella {constructor (name, age, size){
    this.name = name
    this.age = age
    this.size = size
}}

let cinderella1 = new Cinderella ( `Luiza`, 21, 28);
let cinderella2 = new Cinderella ( `Marta`, 22, 31);
let cinderella3 = new Cinderella ( `Nata`, 19, 33);
let cinderella4 = new Cinderella ( `Polka`, 31, 48);
let cinderella5 = new Cinderella ( `Karina`, 27, 41);
let cinderella6 = new Cinderella ( `Mustafa`, 20, 38);


let cinderellaList = [];
let fn = (...girl) => cinderellaList.push(...girl);
fn (cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6);
console.log(cinderellaList);

let price = {
    name: `Sasha`,
    age: 23,
    size: 28
}
console.log(price);

let findSize = (arr, prince) => {
    for (const arrElement of arr) {
        if (arrElement.size === prince.size){
            return arrElement
        }
    }
}
console.log(findSize(cinderellaList, price));
