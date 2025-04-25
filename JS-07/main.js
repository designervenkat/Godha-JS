// Objects

// Singleton - Object.create()

// Constructor Functions

// function Users(firstName, lastName) {
//     ;(this.firstName = firstName), (this.lastName = lastName)
// }

// const profile = new Users('John', 'Smith')
// console.log(profile)

// ES6 Classes

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const profile = new User('John007', 'Smith')
// console.log(profile)

// Object Literals

// Two kinds of values we can store

// static properties
// dynamic properties

const newSymbol = Symbol('something')
// const newSymbol2 = Symbol('something')

// console.log(newSymbol === newSymbol2)

const user = {
    name: 'John Smith',
    'Full Name': 'Bruce Wayne',
    age: 30,
    email: 'john@gmail.com',
    isActive: true,
    mobileNumbers: ['9900990099', '88000880088'],

    [newSymbol]: 'something2',

    greeting: function () {
        console.log('Hello user!')
    },
    greeting2: function () {
        console.log(`${this['Full Name']}`) // The this keyword refers to the current object of which properties the method is calling.
    },
}

// DOT notation

// console.log(user.name)

// Square Bracket Notation - Dynamic Properties

// console.log(user['name'])

// CRUD - Create - Read - Edit/Update - Delete

// user.email = 'bruce@gmail.com'

// Object.freeze(user) // Freeze all properties from any changes

// user.email = 'smith@gmail.com'

// delete user.age

// console.log(typeof user)

// console.log(user[newSymbol])

// console.log(user.greeting)

console.log(user.greeting2())

// console.log(this)

// function abc() {
//     console.log(this)
// }
// abc()
