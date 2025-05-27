// fetch('https://68351b82cd78db2058c04649.mockapi.io/products')
//     .then((res) => {
//         // console.log(res)
//         if (res.status === 200) {
//             const data = res.json()
//             console.log(data)

//             const { title, price } = data
//             if (!title && !price) {
//                 console.log('No Product Found')
//                 return
//             }
//             console.log(`Product Title = ${title} and Price is ${price}`)
//         } else {
//             console.log('404 Content Not Found')
//         }
//     })
//     .catch((err) => console.log('Something went wrong', err))

;(async () => {
    try {
        const res = await fetch(
            'https://68351b82cd78db2058c04649.mockapi.io/products'
        )

        if (!res.ok) {
            console.log(`Request failed with status code : ${res.status}`)
        }

        const data = await res.json()

        const { title, price } = data[0]

        console.log(`Product Name : ${title} and price is ${price}`)
    } catch (error) {
        console.log(`Something went wrong with code : ${error}`)
    }
})()
