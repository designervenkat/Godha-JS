// Arrays

// First Syntax using class method
// let arrClass = new Array(1, 2, 3, 4)

// Second Syntax
// let arr = [1, 2, 3, 4, 5, 6]

// let arr1 = [
//     1,
//     2,
//     'john',
//     true,
//     { name: 'bob', email: 'something@gmail.com' },
//     [4, 5, 6],
// ]

// console.log('A', arrClass)
// console.log('B', arr)
// console.table(arr1[4])

let heros = ['superman', 'ironman', 'flash', 'Aquaman', 'Captain']
// heros.pop() // no parameter // remove last
// heros.push('Aquaman') // parameter // Add to last
// heros.shift() // no parameter // removes first element
// heros.unshift('Captain') // parameter // Add to first element //

// console.log('Original :', heros)

// const arr1 = heros.slice(1, 3)

// console.log('A :', arr1)

// const arr2 = heros.splice(1, 3)

// console.log('M :', arr1)

// console.log('B :', arr2)

let num = [0, 1, 2, 3, 4, 5]

let newNum = num.slice(3, 5)

// console.log(num)
console.log(newNum)
// console.log(typeof num)
// console.log(typeof newNum)
// console.log(num == newNum)

const addNum = newNum.splice(0, 0, 'John')

newNum.splice(2, 1, 'Bob') // Position to add, Numbers to delete, Add the item

// console.log(num)
console.log(newNum)
// console.log(addNum)

const q = newNum.includes(3)
const reverse = newNum.reverse()
console.log('Question ? :', reverse)
