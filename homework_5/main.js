// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleArea = (a, b) => a * b;
console.log(rectangleArea(4,5));

let resultRectangle = (rectangleArea(4,5));
document.write (`<p>${resultRectangle}</p>`);

// чи правильний синтаксис якщо написати так? чи це трохи порнота?
document.write (`<p>${rectangleArea(4,5)}</p>`);

/////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleArea = (r) => Math.PI * r ** 2;
console.log(circleArea(3));
let resultCircle = circleArea(3);
document.write (`<p>${resultCircle}</p>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderArea = (r, h) => 2 * Math.PI * r * (r + h);
console.log(cylinderArea(2, 4));
let resultCylinder = cylinderArea(2, 4);
document.write(`<p>${resultCylinder}</p>`);

//////////////////////////////////////////////////////////////////////////////
const calculateArea = (figure, ...items) => {
    let area;

    if (figure === 'rectangle') {
        let [a, b] = items;
        area = a * b;
    } else if (figure === 'circle') {
        let [r] = items;
        area = Math.PI * r * r;
    } else if (figure === 'cylinder') {
        let [r, h] = items;
        area = 2 * Math.PI * r * (r + h);
    } else {
        return "I don't know this figure.";
    }
    return area;
}
console.log(calculateArea('rectangle', 4, 5));
console.log(calculateArea('circle', 3));
console.log(calculateArea('cylinder', 2, 4));

// створити функцію яка приймає масив та виводить кожен його елемент

const elements = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
}

let array = [-11, 'text', true, 5];
elements(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const paragraph = (t) => {
    document.write(`<p>${t}</p>`)
    // console.log(t)
}

paragraph("Довільний текст");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulOne = (textLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`)
}
ulOne('Мій текст для li')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulTwo = (amount, textLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`)
}
ulTwo(5,'Мій текст для li')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const list = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
list([3, false, 'text']);

const listTwo = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
listTwo(['Text', 23, true, 45, 'text']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'Harry Potter', username: 'H_Potter', password: 'dKTxCcu'},
    {id: 2, name: 'Hermione Granger', username: 'H_Granger', password: 'h8t0PpQ'},
    {id: 3, name: 'Ron Weasley', username: 'R_Weasley', password: 'U2b6MxAH0m8'},
    {id: 4, name: 'Severus Snape', username: 'S_Snape', password: 'FVamFTJA'},
    {id: 5, name: 'Albus Dumbledore', username: 'A_Dumbledore', password: 'jylc9MWD'},
    {id: 6, name: 'Draco Malfoy', username: 'D_Malfoy', password: 'RYgkrixCIJ'},
    {id: 7, name: 'Rubeus Hagrid', username: 'R_Hagrid', password: 'w3S0qFl70'},
    {id: 8, name: 'Minerva McGonagall', username: 'M_McGonagall', password: 'TzJAdElC'},
    {id: 9, name: 'Sirius Black', username: 'S_Black', password: 'OenFEMhU'},
    {id: 10, name: 'Luna Lovegood', username: 'L_Lovegood', password: 'f5CuPgj6im'},
];

const userBlock = (arr) => {
    for (const user of arr) {
        document.write(`
        <div>
            <p>id: ${user.id}</p>
            <p>name: ${user.name}</p>
            <p>username: ${user.username}</p>
            <p>password: ${user.password}</p>
        </div>`);
    }
}
userBlock(users);

// - створити функцію яка повертає найменьше число з масиву

const minNo = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let No = [158, 35, 2 , -2, -18];

console.log(minNo(No));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}
let numbers = [1, 2, 10];
console.log(sum(numbers));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

const swap = (arr, index1, index2) => {
    let interim = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = interim;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 3));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let i = 0;
    while (i < currencyValues.length) {
        let kind = currencyValues[i];
        if (kind.currency === exchangeCurrency) {
            return `${sumUAH / kind.value} ${exchangeCurrency}`;
        }
        i++;
    }
    return 'Oooops!!!';
}

let currencyValues = [
    {currency: 'GBP', value: 46.03},
    {currency: 'USD', value: 36.35},
    {currency: 'EUR', value: 39.76},
    {currency: 'RUB', value: 100000}
];
let cash = 10000;
let exchangeCurrency = 'GBP';

let result = exchange(cash, currencyValues, exchangeCurrency);
console.log(cash + " UAH = " + result);

