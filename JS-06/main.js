let nums = [1, 2, 3, 4, 5, 6]

let nums2 = [7, 8, 9, 10, 11, 12]

let dcHeros = ['Superman', 'Flash', 'Batman']

let marvelHeros = ['Ironman', 'Thor', 'Spiderman']

// .push // .pop // .shift // .unshift // .splice // .slice

// nums.push(nums2)

// let newNums = nums.concat(nums2)

// let newNums = [...nums, ...nums2] // Spread Operation

let newArray = [1, 2, 3, 4, 5, 6, ['Superman', 'Flash', 'Batman', [7, 8, 9]]]

const flatArr = newArray.flat(Infinity)

// let username = 'john'

// console.log(Array.isArray(flatArr))

// console.log(Array.isArray('Javascript'))

// console.log(Array.from('Javascript')) // convert into an array

// console.log(Array.from({ name: 'John' }))

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

// console.log(Array.of(scoreOne, scoreTwo, scoreThree))

// console.log(flatArr)

// const newNums = nums.map((superman) => superman + 2)

// nums.map((item) => console.log(item))

// nums.forEach((item) => console.log(item))

// const newNums = dcHeros.filter((item) => item === 'Superman')

// console.log(newNums)

// const greaterNum = nums.every((n) => n < 9)

// const greaterNum = nums.some((n) => n > 3)

let allHeros = marvelHeros.join(' 🍀 ')

console.log(allHeros)

// .sort // .reduce (skip) // .find // .fill
