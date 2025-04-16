// A variable is a way to store the value of something to use later.
// Javascript is a loose-type language, Variable can set or Reset to any type.
// We do not need to declare types of variables in javascript.

// Two ways only to declare a variable;

var user_id = 1234 // ES5 // NOT RECOMMENED // NEVER USE VAR KEYWORD

let user_name = 'John Doe' // ES6 Recommened way to declar variable

// variable can be changed under the let keword. And works well with block level scope.

const user_email = 'john@gmail.com' // ES6 Recommened way to declar variable

// const is short for constant = variable that cannot be changed.

user_city = 'NYK' // NOT RECOMMENED

let user_age

// Findings

// user_email = 'sam@gmail.com'

// user_id = 'Sam Doe'

// console.log(user_id)

user_age = '30'

let fruits = ['Apple', true, 2, undefined, '']

console.log(typeof fruits)
console.log(fruits[0])

// console.table([user_id, user_name, user_age, user_email, user_city])

// DATA TYPES - Primitive Data :

// Strings -
//     'A string is a sequence of characters enclosed in single or double quotes - Text Values or Alpha Numbers'

// Numbers -
//     'The number data type represents numerical values, which can be integers, decimals or floating-point numbers.'

// BigInt - 'represent integers larger than the maximum value - ES6'

// Boolean - 'logical entity which has two values = True or False'

// Undefined -
//     'When a variable is declared but not assigned a value, its value is undefined.'

// Null -
//     'The null data type represents the intentional absence of any object value. It is often used to signify that a variable has no value assigned to it. '

// Symbol -
//     'A symbol is a unique and immutable data type introduced in the ES6 version of javascript (ECMAScript 2015). It is used to store an anonymous and unique value. '

// DATA TYPES - Non Primitive Data :

// Objects -
//     'store collections of data, and can be created using the curly braces {} syntax. Objects can contain key-value pairs,'

// Arrays -
//     'Arrays are another common non-primitive data type in JavaScript that are used to store ordered collections of data in a single variable. They can be created using the square brackets [] syntax. Arrays can contain any data type, and the elements are indexed by number starting from 0.'

// Function
