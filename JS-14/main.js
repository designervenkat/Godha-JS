// Resources

// https://www.svgrepo.com/collections
// https://icons8.com
// https://unsplash.com/

// Control Flow

// Two types : Conditional Statement and Loops

let isAdmin = true

// if (!isAdmin) {
//     // do something
//     console.log('Please check with your credentials')
//     return
// }

let score = 76

// if (score > 32) {
//     console.log('The student has passed')
// } else {
//     console.log('The student has failed')
// }

// if (score >= 75) {
//     console.log('Distinction')
// } else if (score >= 50 && score < 75) {
//     console.log('First Division')
// } else {
//     console.log('Better luck next time')
// }

// console.log(score >= 50 ? 'Passed' : 'Failed')

// if (true) console.log('This is truthy statement') // implicit return

// Switch Case

// switch (expression) {
//     case value1:
//         // code to execute if expression === value1
//         break
//     case value2:
//         // code to execute if expression === value1
//         break
//     default:
//     // code to execute if no case match
// }

let day = 4

switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    default:
        console.log('Invalid Day')
}

let month = 12

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Winter')
        break
    case 3:
    case 4:
    case 5:
        console.log('Spring')
        break
    default:
        console.log('Invalid month')
}

// Check for Even or Odd

// let num = 9
// if (num % 2 === 0) {
//     console.log('the num is even')
// } else {
//     console.log('the num is odd')
// }

//  Write a program that assigns a letter grade based on a numerical grade.

let result = 61
let grade

// Above 90 = A
// Above 70 = B
// Above 60 = C
// Equal to 60 = D
// Above  = F

// if (result >= 90) {
//     grade = 'A'
// } else if (result >= 70) {
//     grade = 'B'
// } else if (result >= 60) {
//     grade = 'C'
// } else if (result < 60) {
//     grade = 'D'
// } else {
//     grade = 'F'
// }

// console.log('Grade :', grade)

// Write a program that calculates the ticket price based on age.

let age = 90
let ticketPrice

// age 12 = 5
// 12 18 = 10
// 18 60 = 20

// 15

// if (age < 12) {
//     ticketPrice = 5
// } else if (age >= 12 && age <= 18) {
//     ticketPrice = 10
// } else if (age > 18 && age <= 60) {
//     ticketPrice = 20
// } else {
//     ticketPrice = 15
// }
// console.log('price', ticketPrice)

// Write a program that greets the user based on the time of day.

// below 12 = Good Morning
// below 18 = Afternoon
//  evening

let currentTime = new Date()
let currentHour = currentTime.getHours()

let greeting

if (currentHour < 12) {
    greeting = 'Good Morning'
} else if (currentHour < 18) {
    greeting = 'Good Afternoon'
} else {
    greeting = 'good Evening'
}

console.log(greeting)
