// function one() {
//     const username = 'john'
//     function two() {
//         const password = '1234'
//         console.log(username)

//         function three() {
//             const email = 'something@gmail.com'
//             console.log(email + password)
//         }
//         three()
//     }
//     // console.log(password)
//     two()
// }
// one()

// if (true) {
//     const lang = 'Javascript'
//     if (lang === 'Javascript') {
//         const course = 'Javascript'
//         console.log(lang + 'is fun to learn')
//     }
//     console.log(course)
// }
// console.log(lang)
// console.log(addOne(5))
// function addOne(num) {
//     return num + 1
// }

// console.log(addTwo(4))

// const addTwo = function (num) {
//     return num + 2
// }

// var                          // let                  // const
// pre ES2015                   // ES2015 ( ES6 )       // ES2015 ( ES6 )
// Global or Func               Global or Block.        Global or Block
// attached to window obj.      // not attached to window obj

// var hoisted to top - undefined
// let hoisted to top - unintialized error
// const hoisted to top - unintialized error

// redeclaration with scope = // var - yes / let and const = no
// reassigned within scope = // var and let - yes // const = no

// function exp() {
//     const Pi = 2.41
//     if (true) {
//         const b = 'something'
//         console.log(Pi)
//         console.log(b)
//     }
//     console.log(b)
// }

// function exp() {
//     var Pi = 2.41
//     if (true) {
//         var Pi = 20
//     }
//     console.log(Pi)
// }
// exp()
