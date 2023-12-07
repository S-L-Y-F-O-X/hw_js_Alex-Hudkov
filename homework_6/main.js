// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const stringMap = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(stringMap.map(str => str.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const stringUpper = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(stringUpper.map(str => str.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const stringLower = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(stringLower.map(str => str.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let stringTrim = '   dirty string   ';
console.log(stringTrim.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
const stringToarray = (str) => {
    return str.split('  ')
}
console.log(stringToarray(str))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbers.map(number => number.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        console.log('Choose "ascending" or "descending"');
    }
};
let nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sort = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filter = coursesAndDurationArray.filter(course => course.monthDuration > 5)
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let  addId= coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    };
});
console.log(addId);




// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const deckOfCards = [
{cardSuit: 'spade', value: '6', color: 'black'},
{cardSuit: 'spade', value: '7', color: 'black'},
{cardSuit: 'spade', value: '8', color: 'black'},
{cardSuit: 'spade', value: '9', color: 'black'},
{cardSuit: 'spade', value: '10', color: 'black'},
{cardSuit: 'spade', value: 'jack', color: 'black'},
{cardSuit: 'spade', value: 'queen', color: 'black'},
{cardSuit: 'spade', value: 'king', color: 'black'},
{cardSuit: 'spade', value: 'ace', color: 'black'},
{cardSuit: 'diamond', value: '6', color: 'red'},
{cardSuit: 'diamond', value: '7', color: 'red'},
{cardSuit: 'diamond', value: '8', color: 'red'},
{cardSuit: 'diamond', value: '9', color: 'red'},
{cardSuit: 'diamond', value: '10', color: 'red'},
{cardSuit: 'diamond', value: 'jack', color: 'red'},
{cardSuit: 'diamond', value: 'queen', color: 'red'},
{cardSuit: 'diamond', value: 'king', color: 'red'},
{cardSuit: 'diamond', value: 'ace', color: 'red'},
{cardSuit: 'heart', value: '6', color: 'red'},
{cardSuit: 'heart', value: '7', color: 'red'},
{cardSuit: 'heart', value: '8', color: 'red'},
{cardSuit: 'heart', value: '9', color: 'red'},
{cardSuit: 'heart', value: '10', color: 'red'},
{cardSuit: 'heart', value: 'jack', color: 'red'},
{cardSuit: 'heart', value: 'queen', color: 'red'},
{cardSuit: 'heart', value: 'king', color: 'red'},
{cardSuit: 'heart', value: 'ace', color: 'red'},
{cardSuit: 'club', value: '6', color: 'black'},
{cardSuit: 'club', value: '7', color: 'black'},
{cardSuit: 'club', value: '8', color: 'black'},
{cardSuit: 'club', value: '9', color: 'black'},
{cardSuit: 'club', value: '10', color: 'black'},
{cardSuit: 'club', value: 'jack', color: 'black'},
{cardSuit: 'club', value: 'queen', color: 'black'},
{cardSuit: 'club', value: 'king', color: 'black'},
{cardSuit: 'club', value: 'ace', color: 'black'}
    ]

// - знайти піковий туз
const aceOfSpades = deckOfCards.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);
// - всі шістки

const sixes = deckOfCards.filter((card) => card.value === '6');
console.log(sixes);

// - всі червоні карти
const redCard = deckOfCards.filter((card => card.color === 'red'));
console.log(redCard)

// - всі буби
const diamond = deckOfCards.filter((card => card.cardSuit === 'diamond'));
console.log(diamond)

// - всі трефи від 9 та більше
// const clubsOverNine = deckOfCards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen','king','ace'].i >= deckOfCards.indexOf('9'));
// console.log(clubsOverNine);
const trefoils = deckOfCards.filter(card => card.cardSuit === 'club' && card.value >= 9); // і на цьому все, н знаю як додати кольорові карти
console.log(trefoils);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);
// --написати пошук всіх об'єктів, в який в modules є docker
const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);
