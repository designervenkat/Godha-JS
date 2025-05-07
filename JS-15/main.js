// Iterations - Loops

// for (let index = 0; index <= 10; index++) {
//     const element = index

//     if (element == 5) {
//         console.log('Found 5')
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     // console.log(`Outer Loop : ${i}`)

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner Loop : ${j}`)
//         // result = i * j
//         // console.log(i + '*' + j + '=' + result)
//     }
// }

// let superheros = ['Flash', 'Ironman', 'Superman']

// for (let i = 0; i < superheros.length; i++) {
//     // console.log(superheros[i])
// }

// break and continue

// for (let index = 0; index <= 10; index++) {
//     if (index === 5) {
//         console.log('Found 5')
//         break
//     }

//     console.log(`Value of index : ${index}`)
// }

// for (let index = 0; index <= 10; index++) {
//     if (index === 5) {
//         console.log('Found 5')
//         continue
//     }

//     console.log(`Value of index : ${index}`)
// }

// while

// let i = 0
// while (i <= 10) {
//     // console.log(`Value is : ${i}`)
//     // i = i + 2
//     // i++
// }

// do while

// let score = 11

// do {
//     console.log(`Value of : ${score}`)
//     score++
// } while (score <= 10)

// Triangle Pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// outer loop
// for (let i = 1; i <= rows; i++) {
//     // inner loop
//     for (let j = 1; j <= i; j++) {
//         result += j // 1
//     }

//     // add a new line
//     result += '\n'
// }

// console.log(result)

// Triangle Pattern

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let rows = 5
let result = ''

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        result += i
    }
    result += '\n'
}
console.log(result)

// Triangle Pattern

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Reverse Triangle — I

// 12345
// 1234
// 123
// 12
// 1

// Number Pyramid Pattern

//     1
//    123
//   12345
//  1234567
// 123456789

//   1
//  234
// 56789

// Stars Patterns

// *****
// *****
// *****
// *****
// *****

// *****
// *   *
// *   *
// *   *
// *****

//     *
//    **
//   ***
//  ****
// *****

// *
// **
// * *
// *  *
// *   *
// ******

// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

// AAAAA
// AAAA
// AAA
// AA
// A

// B
// BB
// BBB
// BBBB
// BBBBB
