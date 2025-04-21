// let now = new Date()

// const newDate = new Date(2024, 0, 24);  // Old syntax
// const es6Date = new Date('2024–01–24'); // ES6 syntax

// console.log(now)
// console.log(now.toString())
// console.log(now.toDateString())
// console.log(now.toLocaleString())
// console.log(typeof now)

const currentDate = new Date()

const formattedDate = `${
    currentDate.getMonth() + 1
} / ${currentDate.getDate()} / ${currentDate.getFullYear()}`

// console.log(formattedDate)

// let now = new Date(2025, 3, 21, 7, 55, 0, 0)
let now = new Date()

// console.log(now.toLocaleString())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.toUTCString())
// let options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
// }
// console.log(
//     now.toLocaleDateString('en-IN', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//     })
// )

// now.setDate(now.getDate() - 7)
// console.log(now.toLocaleString())

// Date Difference

let startDate = new Date('2025-01-01')
let endDate = new Date('2025-01-01')

let timeDiff = endDate - startDate
let daysDiff = timeDiff / (1000 * 60 * 60 * 24)

// console.log(timeDiff)
// console.log(daysDiff)

// console.log(startDate === endDate)
// console.log(startDate < endDate)
// console.log(startDate > endDate)

const es6Date = new Date()
const formttedDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
}).format(es6Date)

console.log(formattedDate)

// let nowWithMoment = moment()
