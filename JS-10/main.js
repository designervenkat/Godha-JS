// Return statement - A return statement returns one specific value and stops the function execution.
function addTwo(num1, num2) {
    // let result = num1 + num2
    return num1 + num2
}

// console.log(addTwo(2, 3)) // 5

// Argument Object - The arguments object is an array-like object that contains the values of the arguments passed to the function.

// function totalCartPrice(item) {
//     console.log(arguments)
//     // console.log(arguments[2])
//     // console.log(arguments[0])
//     // console.log(arguments) // [100, 200, 300]
//     return item
// }

// function totalCartPrice(num1, num2, ...item) {
//     // rest operator - The rest operator allows us to represent an indefinite number of arguments as an array.
//     console.log(num1, num2, item)
//     // return item
// }

// console.log(totalCartPrice(100, 200, 300, 400, 500))

// const cart = {
//     id: 1,
//     username: 'John Doe',
//     item: 'Iphone 14',
//     prices: 1000,
// }

// function getCartInfo(newObj) {
//     console.log(
//         `Username is ${newObj.username} and the price is ${newObj.prices}`
//     )
// }

// // getCartInfo(cart)
// getCartInfo({
//     id: 1,
//     username: 'John Doe',
//     item: 'Iphone 14',
//     prices: 1000,
// })

// const myArray = [1, 2, 3, 4, 5]

// function returnArray(getArr) {
//     return getArr
// }

// // console.log(returnArray([1, 2, 3, 4, 5]))
// console.log(returnArray(myArray))

function sendMsg(...msg) {
    console.log(msg)
}

sendMsg('hello', true, 100, [1, 2, 3], { name: 'John Doe' })
