// Arithmetic Operators + - * / % **

// Assignment Operators

// = Assign value

// += Add then assign

// -= Add then assign

// *= Add then assign

// Logical Operators || Or && And

// Equality == ===

// Conversion + - !

// Relational / Comparison >= <= != !==

// Increment / Decrement ++ --

// ...spread-operator

// Coercion - Trying to compare different types :-

// First - Convert one type to another

// Second - Compare values

// Type coercion priority order

// - String
// - Number
// - Boolean

// console.log(2 + '6')
// console.log(true - 5)

// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 === 1)

// console.log('2' > 1)
// console.log('02' > 1)

// console.log(null > 0)
// console.log(null == 0)

// console.log(undefined == 0)
// console.log(undefined <= 0)
// console.log(undefined >= 0)

// console.log(null >= 0)

// console.log('2' == 2) // Loose equality operator !=
// console.log(+'2' === 2) // Strict equality operator !==

// Equality check == and comparisons < > <= >= work differently
// Comparisons convert null to a number, 0

let a = false
let b = 0
let c = 6
let d = true

// console.log(a == b)
// console.log(c == d)

// [] Arrays
// {} Object
// [ {} ] Arrays of objects

// console.log(5 == [5]) // true
// console.log(5 == ['5']) // true
// console.log(0 == '') // true
// console.log(0 == '0') // true
// console.log(false == 'false') // NaN false
// console.log(false == '0') // true
// console.log('' == '0') // false
// console.log(+0 == -0) // true

// console.log(null == undefined) // true
// console.log(false == undefined) // false
// console.log(false == null) // false

// nothing is eqaul to NaN, Not even NaN itself
// console.log(NaN == NaN) // false
// console.log(NaN == false) // false
// console.log(NaN == undefined) // false
// console.log(NaN == null) // false

// console.log([5] == [5]) // false
// console.log({ a: 'a' } == { a: 'a' }) // false
// console.log({} == {}) // false

let num1 = 10 // true
let str = 'Javascript' // 1 = true

// console.log(num1 && str) // true == 1

// Conversion to Booleans

// console.log(Boolean(0)) // false
// console.log(Boolean('')) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(-0)) // false
// console.log(Boolean(false)) // false

// console.log(Boolean(1)) // true
// console.log(Boolean(-10)) // true
// console.log(Boolean('Orange')) // true
// console.log(Boolean([])) // true
// console.log(Boolean({ a: 'a' })) // true
// console.log(Boolean({})) // true
// console.log(Boolean(Symbol())) // true
// console.log(Boolean(Symbol('x'))) // true

// Conversion to Numbers

// console.log(Number(0)) // 0
// console.log(Number('')) // 0
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number(Symbol())) // TypeError
// console.log(Number(' 5 ')) // 5
// console.log(Number(' ')) // 0
// console.log(Number('\n')) // 0
// console.log(Number('-1/2')) // NaN
// console.log(Number('102.3')) // 102.3

// Conversion to Strings

// console.log(String(0)) // 0
// console.log(String('')) // ''
// console.log(String(null)) // null
// console.log(String([])) // ''
// console.log(String({})) // '[object object]'
// console.log(String(undefined)) // 'undefined'
// console.log(String(true)) // 'true'
// console.log(String(false)) // 'false
// console.log(String(Symbol())) // 'Symbol()'
// console.log(String(' 5 ')) // "5"

console.log(String('\n')) // " "
console.log(String('-1/2')) // '-1/2'
console.log(String('102.3')) // '102.3'
