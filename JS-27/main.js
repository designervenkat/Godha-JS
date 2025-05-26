const promise1 = new Promise(function (resolve, reject) {
    // Do any async operations
    // Database connections
    // Read and Write Files
    // Encrypt Password and Dcrypt Password
    // Networks Call
    setTimeout(function () {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

promise1.then(function () {
    console.log('Promise Consumed')
})

// Directly chaining .then method
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('Async task 2 is completed')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Another Promise Consumed')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: 'John', email: 'john@example.com' })
    }, 1000)
})

promise3.then((user) => console.log(user))

// Reject
const promise4 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'Sam', email: 'sam@example.com' })
        } else {
            reject('Something went wrong')
        }
    }, 1000)
})

promise4
    // chaining (thenable )
    .then((user) => {
        console.log(user)
        return user.email // process or transform the data
    })
    .then((email) => console.log(email))
    .catch((err) => console.log(err))
    .finally(() => console.log('The promise is either resolved or rejected!'))

const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ lang: 'Javascript', short: 'JS' })
        } else {
            reject('Server error. Please try again!')
        }
    }, 1000)
})

// async and await

async function promise5Consume() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

promise5Consume()

// Example Fetching data

async function getAllTodos() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        )
        // console.log(response)

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// getAllTodos()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// https://blog.logrocket.com/fetch-api-node-js/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
