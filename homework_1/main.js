//
// Task_1
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let js1 ='hello';
let js2 ='owu';
let js3 ='com';
let js4 ='ua';
let js5 = 1;
let js6 = 10;
let js7 = -99;
let js8 = 123;
let js9 = 3.14;
let js10 =2.7;
let js11 = 16;
let js12 = true;
let js13 = false;

console.log(js1, js2, js3, js4, js5, js6, js7, js8, js9, js10, js11, js12, js13);
// Task_2
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Alexey';
let middleName = 'Volodimirovich';
let lastName = 'Hudkov';
let result = `${firstName} ${middleName} ${lastName}`;

console.log(result);

// Task_3
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// Task_4
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let myFirstName = prompt('Enter your first name');
let myMiddleName = prompt('Enter your middle name');
let myAge = prompt('Enter your first name');

const myResult = `${myFirstName} ${myMiddleName} ${myAge}`;
console.log(myResult);