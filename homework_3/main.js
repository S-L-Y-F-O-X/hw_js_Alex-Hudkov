
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write("<div class='block'>Blanca Fernandes</div>")
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write("<div class='block'>"+ (i + 1) + " " + "Manuel Gong</div>")

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<20) {
    document.write("<h1>Hasan Peter</h1>")
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0;
while (ii<20){
    document.write("<h1>Jason Pradhan" + " " + (ii+1) + "</h1>")
    ii++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// Через while ---------------------------------------------------
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul> List Items");
    let iu = 0;
    while (iu<listOfItems.length) {
        document.write("<li>" + listOfItems[iu] + "</li>");
        iu++;
    }
document.write("</ul>");

    // Через for ------------------------------------------------
document.write("<ul> List Items");
for (let i = 0; i < listOfItems.length; i++) {
    document.write("<li>" + listOfItems[i] + "</li>");
}
document.write("</ul>");

// Через for of ------------------------------------------------
document.write('<ul> List Items');
for (let item of listOfItems) {
    document.write('<li>' + item + '</li>');
}
document.write('</ul>');

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

let p = 0;

while (p<products.length){
    let product = products[p];
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. <br> Price - ${product.price} $ </h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>           
`)
    p++;
}
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
document.write("Kористувачі зі статусом true")
    for (let user of users) {
        if (user.status) {
            document.write(`<li>${user.name}</li>`)
        }
    }

// - користувачів зі статусом false

document.write("Kористувачі зі статусом false")
for (let user of users) {
    if (!user.status) {
        document.write(`<li>${user.name}</li>`)
    }
}

// - користувачів які старші за 30 років

document.write("Kористувачі які старші за 30 років")
for (let user of users) {
    if (user.age>30) {
        document.write(`<li>${user.name}</li>`)
    }
}