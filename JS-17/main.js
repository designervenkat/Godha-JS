const nums = [1, 2, 3, 4, 5, 6]

const newNums = nums
    .map((num) => num * 2)
    .map((num) => num + 2)
    .filter((num) => num >= 10)

// console.log(newNums)

// Reduce Method - we get single value either combine, reduce, reshape the compelex data

//  array.reduce(callback, initialValue)

// sum up an array
const total = nums.reduce((acc, currVal) => {
    // console.log('accumulator value is :', acc, 'and current value is ', currVal)
    return acc + currVal
})

// counting occurrences
const colors = ['Blue', 'Red', 'Yellow', 'Green', 'Blue', 'Red']

// const colorsCount = colors.reduce((acc, color) => {
//     console.log(`Accumlator Value : ${acc[color]} and Current Color : ${color}`)
//     acc[color] = (acc[color] || 0) + 1
//     return acc
// }, {})

const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
]

const flatArr = arr.reduce((acc, currArr) => acc.concat(currArr), [])

// Sum up in cart with objects
const cart = [
    {
        itemName: 'iPhone',
        price: 999,
    },
    {
        itemName: 'ipods',
        price: 199,
    },
    {
        itemName: 'ipad',
        price: 100,
    },
]

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

// Grouping by property

const cartItem = [
    {
        itemName: 'iPhone',
        price: 999,
    },
    {
        itemName: 'ipods',
        price: 199,
    },
    {
        itemName: 'ipad',
        price: 999,
    },
    {
        itemName: 'iPhone 16',
        price: 40,
    },
]

const groupByPrice = cartItem.reduce((acc, value) => {
    const itemPrice = value.price
    if (!acc[itemPrice]) acc[itemPrice] = []
    acc[itemPrice].push(value)
    return acc
}, {})

// console.log(groupByPrice)

// Output the minimum values in the array
const price = [9.99, 2.5, 48.4, 24.6, 30.5]

const minValue = price.reduce((acc, curValue) => {
    // console.log(`Minmum value : ${acc} and Current Value is ${curValue}`)
    if (curValue < acc) {
        // console.log('Condition Value : ', curValue)
        return curValue
    }

    // console.log('Final Acc value : ', acc)
    return acc
})

const movies = [
    {
        title: 'Flash',
        score: 99,
        year: 2001,
    },
    {
        title: 'Superman',
        score: 85.9,
        year: 2004,
    },
    {
        title: 'IronMan',
        score: 99.9,
        year: 2010,
    },
    {
        title: 'Aqua Man',
        score: 76.9,
        year: 2021,
    },
    {
        title: 'Batman',
        score: 99.9,
        year: 2022,
    },
]

const highestScore = movies.reduce((acc, currMovie) => {
    console.log(
        `Highest Movie : ${acc.score} and Current Movies : ${currMovie.score}`
    )
    if (currMovie.score >= acc.score) {
        return currMovie
    }
    return acc
})

console.log(highestScore)
