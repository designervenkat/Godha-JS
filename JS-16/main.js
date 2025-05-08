// Higher Order Functions - Loops

// A high order function is a function which takes other function as an argument and Returns function

// HF does at least one of the following:

// 1 - Takes one or more functions as arguments
// 2 - Returns a function as its result.

// High-order functions allow us to create more generic functions, reduce code duplication, and can lead to code that is easier to read and maintain.

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for of.

const arr = [1, 2, 3, 4, 5]

for (const item of arr) {
    // console.log(item)
}

const greet = 'Hello Javascript!'

for (const str of greet) {
    // console.log(str)
}

const map = new Map() // Maps with iteratable
map.set('Rs', 'Rupees')
map.set('Dollar', 'USA')
map.set('Rand', 'SA')

// console.log(map)

// for (const [key, Value] of map) {
//     console.log(key, ' - ', Value)
// }

// for in

// const obj = {
//     username: 'john',
//     email: 'john@gmail.com',
// }

// for (const key in obj) {
//     console.log(`${key} -  ${obj[key]}`)
// }

for (const key in map) {
    console.log(key)
}

// forEach = Higher Order Function using callback

// const superheros = ['Batman', 'Superman', 'Ironman']

// regular function
// function heros(item) {
//     console.log(item)
// }

// ananoums function
// superheros.forEach(function (item, index, arr) {
//     // console.log(`${item} - ${index} - ${arr}`)
// })

// arrow function
// superheros.forEach((item) => console.log(item))

const obj = [
    {
        username: 'john',
        email: 'john@gmail.com',
    },
    {
        username: 'sam',
        email: 'sam@gmail.com',
    },
    {
        username: 'ram',
        email: 'ram@gmail.com',
    },
]

// obj.forEach((item) => console.log(item.username))

const superheros = ['Batman', 'Superman', 'Ironman']

// const heros = superheros.forEach((item) => {
//     return item
// })

const numbers = [0, 1, 2, 3, 4]

const newNum = numbers.map((item) => item * 2)

// console.log(newNum)

const books = [
    {
        author: 'Chinua Achebe',
        country: 'Nigeria',
        imageLink: 'images/things-fall-apart.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
        pages: 209,
        title: 'Things Fall Apart',
        year: 1958,
    },
    {
        author: 'Hans Christian Andersen',
        country: 'Iceland',
        imageLink: 'images/fairy-tales.jpg',
        language: 'Danish',
        link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
        pages: 784,
        title: 'Fairy tales',
        year: 1836,
    },
    {
        author: 'Dante Alighieri',
        country: 'Iceland',
        imageLink: 'images/the-divine-comedy.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
        pages: 928,
        title: 'The Divine Comedy',
        year: 1315,
    },
    {
        author: 'Unknown',
        country: 'Sumer and Akkadian Empire',
        imageLink: 'images/the-epic-of-gilgamesh.jpg',
        language: 'Akkadian',
        link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
        pages: 160,
        title: 'The Epic Of Gilgamesh',
        year: -1700,
    },
    {
        author: 'Unknown',
        country: 'Nigeria',
        imageLink: 'images/the-book-of-job.jpg',
        language: 'Hebrew',
        link: 'https://en.wikipedia.org/wiki/Book_of_Job\n',
        pages: 176,
        title: 'The Book Of Job',
        year: -600,
    },
    {
        author: 'Unknown',
        country: 'India/Iran/Iraq/Egypt/Tajikistan',
        imageLink: 'images/one-thousand-and-one-nights.jpg',
        language: 'Arabic',
        link: 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
        pages: 288,
        title: 'One Thousand and One Nights',
        year: 1200,
    },
    {
        author: 'Unknown',
        country: 'Iceland',
        imageLink: 'images/njals-saga.jpg',
        language: 'Old Norse',
        link: 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
        pages: 384,
        title: "Nj\u00e1l's Saga",
        year: 1350,
    },
]

// let countryBook = books.filter(
//     (item) => item.country === 'Nigeria' || item.language === 'Arabic'
// )

// arrow functions
books.filter(() => {})

// regular function with name
books.filter(function () {})

console.log(countryBook)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in
