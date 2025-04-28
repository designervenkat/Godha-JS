const user1 = {
    id: 1,
    username: 'Bret',
    address: {
        street: 'Kulas Light',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
    },
}

// Dot notation destructuring
// console.log(user1.address.geo.lat)

// Object destructuring
const {
    username, // alias
    address: {
        zipcode,
        geo: { lat },
    },
} = user1

console.log(`User Id - ${username}-${zipcode}${lat}`)

const user2 = {
    id: 2,
    username: 'Sam',
    address: {
        street: 'Kulas Some',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
    },
}

// const user3 = { user1, user2 }

// let user3 = Object.assign({}, user1, user2, user4)

// console.log(user3)

// const apiData = JSON.stringify(user)

// const transformedData = JSON.parse(apiData)

// console.log(typeof transformedData)

// console.log(apiData)

// console.log(transformedData.username)

// const target = { a: 1, b: 2 }
// const source = { b: 4, c: 5 }

// const users = Object.assign(user1, user2)

// const returnedTarget = Object.assign(target, source)

// console.log(target)

// console.log(returnedTarget)

// console.log(user1.address.geo.lat)

// console.log(Object.keys(user1))
// console.log(Object.values(user1))
// console.log(Object.entries(user1))

// Object.freeze() vs Object.seal()

Object.seal(user1)

user1.id = 3
user1.mobile = 9900990099

// console.log(user1)
