// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [
    new User( 15, "Harry", "Potter", "harry@gmail.com", "+380123456789" ),
    new User( 91, "Hermione", "Granger", "hermione@gmail.com", "+380987654321" ),
    new User( 46, "Ron", "Weasley", "ron@gmail.com", "+380567891234" ),
    new User( 62, "Draco", "Malfoy", "draco@gmail.com", "+380432156789" ),
    new User( 36, "Luna", "Lovegood", "luna@gmail.com", "+380987654321" ),
    new User( 11, "Neville", "Longbottom", "neville@gmail.com", "+380567891234" ),
    new User( 53, "Ginny", "Weasley", "ginny@gmail.com", "+380432156789" ),
    new User( 7, "Sirius", "Black", "sirius@gmail.com", "+380987654321" ),
    new User( 82, "Remus", "Lupin", "remus@gmail.com", "+380567891234" ),
    new User( 24, "Severus", "Snape", "severus@gmail.com", "+380432156789")
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterId = users.filter((user) => user.id % 2 === 0);
console.log(filterId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortId = users.sort((a, b) => a.id - b.id);
console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

const Clients = []
    let client1 = new Client( 15, "Harry", "Potter", "harry@gmail.com", "+380123456789", ['Wand', 'Broomstick', 'Marauder\'s Map', 'Golden Snitch', 'Invisibility cloak' ]);
    let client2 = new Client( 91, "Hermione", "Granger", "hermione@gmail.com", "+380987654321", ['Wand', 'Quill and Ink Set', 'Spellbook', 'Cauldron' ]);
    let client3 = new Client( 46, "Ron", "Weasley", "ron@gmail.com", "+380567891234", ['Wand', 'Broomstick','Quill and Ink Set', 'Cauldron' ]);
    let client4 = new Client( 62, "Draco", "Malfoy", "draco@gmail.com", "+380432156789", ['Wand', 'Broomstick', 'Quill and Ink Set' ]);
    let client5 = new Client( 36, "Luna", "Lovegood", "luna@gmail.com", "+380987654321", ['Wand', 'Quill and Ink Set'  ]);
    let client6 = new Client( 11, "Neville", "Longbottom", "neville@gmail.com", "+380567891234", ['Wand', 'Broomstick', 'Quill and Ink Set', 'Chocolate Frogs' ]);
    let client7 = new Client( 53, "Ginny", "Weasley", "ginny@gmail.com", "+380432156789", ['Wand', 'Broomstick', 'Quill and Ink Set' ]);
    let client8 = new Client( 7, "Sirius", "Black", "sirius@gmail.com", "+380987654321", ['Wand', 'Spellbook' ]);
    let client9 = new Client( 82, "Remus", "Lupin", "remus@gmail.com", "+380567891234", ['Wand', 'Spellbook' ]);
    let client10 = new Client( 24, "Severus", "Snape", "severus@gmail.com", "+380432156789", ['Wand', 'Quill and Ink Set', 'Cauldron' ]);

Clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

console.log(Clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortOrder = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, make, year, maxSpeed, engineVolume) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        console.log("Інформація про автомобіль:");
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key.toUpperCase()}:`, this[key]);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}
const bugattiVeyron = new Car('Veyron', 'Bugatti', 2021, 407, 8.0);
bugattiVeyron.drive();
bugattiVeyron.addDriver({ name: 'Lex', age: 34 });
bugattiVeyron.increaseMaxSpeed(7);
bugattiVeyron.changeYear(2023);
bugattiVeyron.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
console.log('//////////////////////////////////////////////')

class CarClass {
    constructor(model, make, year, maxSpeed, engineVolume) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        console.log("Інформація про автомобіль:");
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key.toUpperCase()}:`, this[key]);
            }
        }
        if (this.driver) {
            console.log("Водій:");
            for (let key in this.driver) {
                console.log(`${key.toUpperCase()}:`, this.driver[key]);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }
    setDriver(driver) {
        this.driver = driver;
    }
}

const lamborghiniAventador = new CarClass('Aventador', 'Lamborghini', 2021, 350, 6.5);

lamborghiniAventador.drive();
lamborghiniAventador.setDriver({ name: 'Alex', age: 27 });
lamborghiniAventador.increaseMaxSpeed(10);
lamborghiniAventador.changeYear(2023);
lamborghiniAventador.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella("Cinderella", 20, 36),
    new Cinderella("Belle", 22,  35),
    new Cinderella("Ariel", 25, 44),
    new Cinderella("Moana", 18, 37),
    new Cinderella("Elsa", 27, 41),
    new Cinderella("Anna", 23, 40),
    new Cinderella("Rapunzel", 19,  43),
    new Cinderella("Jasmine", 21, 39),
    new Cinderella("Tiana", 24, 42),
    new Cinderella("Mulan", 26, 38)
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.shoeSize) {
                return cinderella;
            }
        }
        return null;
    }
}

const princeCharming = new Prince('Artur Pentragon', 30, 37);

const chosenCinderella = cinderellas.find(cinderella => cinderella.footSize === princeCharming.shoeSize);
console.log(`Принц ${princeCharming.name} знайшов свою попелюшку, це ${chosenCinderella.name}!`);