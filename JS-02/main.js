// Everything in the Javascript is an Object

// What are the Methods in Javascripts ?

// Methods are almost the same thing as function — they both act.

// The main difference is that methods are functions inside objects and they are attached to them. Functions can exist on their own while methods cannot.

// comes with a variety of built-in methods that are ready to be used as soon as the language is implemented.

// These methods are pre-written methods and perform specific tasks such as mathematical operations, data manipulation, and even manipulating the Document Object Model (DOM).

let userId = 12

const newNum = (24 + 6).toString() // toString(): Converts a number to a string.

// console.log(newNum)
// console.log(typeof newNum)

// toExponential =  Converts a number to exponential notation.

let y = 2

// const expo = y.toExponential(8)

// toFixed(): Formats a number with a specific number of decimals.

const fixed = y.toFixed(6)
const preision = y.toPrecision(4)

// valueOf(): Returns the primitive value of a number.

// console.log((20 + 4).valueOf())

let x = 'javascript'

const newValue = Number(x)

let isLoggedIn = 1

let valueBoolean = Boolean(isLoggedIn)

let username = '24'

let stringToNum = String(username)

// console.log(stringToNum)
// console.log(typeof stringToNum)

// const something = Number('js')
const something = Math.floor(Math.random() * 10)
console.log(something)
console.log(typeof something)
