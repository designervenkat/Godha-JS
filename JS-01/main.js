// Primitive vs Non-Primitive data type

// Primitive - string, number, boolean, null and undefined, bigInt and symbols

// Non-Primitive - Objects, Arrays and Function

// Primitive Types :

// Primitive datatype gets the fixed amount of memory at compile time.

// This technique is called as Static Memory Allocation.

// STACK memory so it is fast and known as being immutable data types means we cannot change or increase its content after it is created.

// we cannot store large data

let firstName = 'John'
// console.log(firstName[0])

firstName[0] = 'S'
// console.log(name[0])

firstName[firstName.length] = 'M'
// console.log(name)

// Non - Primitive - Dynamic Memory Allocation where memory allocation is not fixed and it depends on the content

// It is stored in HEAP memory so it is slow compare to primitive datatype and known as being mutable data types means we can change or increase its content.

// // we can store large data

// let fruits = ['Apple', 'Orange', 'Kiwi']
// console.log(fruits[0])

// modified the content
// fruits[0] = 'Grapes'
// console.log(fruits[0])

// increase the content
// fruits[3] = 'Watermelon'
// console.log(fruits)

// String - ' ' , " " , ` `

let username = 'James'

let singleQuote = 'Hello ${username}'

let doubleQuote = 'Hello, Double ${username}'

let templateLiteralString = `Hello,  ${username} ` // we can inject dynamic variables

// console.table([singleQuote, doubleQuote, templateLiteralString])

// String Length property gives the number of characters in a string.

// console.log(username.length)

// Accessing Characters - access individual characters in a string using [] square bracket notation or the .charAt() method.

// console.log(username[6])

// console.log(username.charAt(4))

// String Methods (Manipulation and Queries)

// console.log(username.toUpperCase())
// console.log(username.toUpperCase())

// Searching Strings

const words = 'Hello Bob, Bob, Bob, How are you ?'

// console.log(words.indexOf('Bob'))
// console.log(words.lastIndexOf('e'))
// console.log(words.includes('Cute'))

// Extracting substrings

// console.log(words.slice(1, 8))
// console.log(words.substring(5)) // doesn't accept negative indexes

// Replace substrings

// - replaces the first occurrence of a substring.
// console.log(words.replace('Bob', 'Javascript'))
// console.log(words.replaceAll('Bob', 'Javascript'))

// Splitting and Joining Strings

const fruit = 'Apple,Banana,Kiwi'

const newArr = fruit.split(',')

console.log(newArr)

console.log(newArr.join(' & '))

console.log(newArr)

// Trimming Whitespaces
