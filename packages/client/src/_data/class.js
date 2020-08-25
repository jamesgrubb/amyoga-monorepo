const client = require('../utils/client')
const query = '*[_type == "class"] {name, description}'

module.exports = async () => {
    const result = await client.fetch(query)
    return result
}

// client.fetch(query).then(bikes => {
//     let classes = []
//     console.log('Bikes with more than one seat:')
//     bikes.forEach(bike => {
//         classes.push(bike)
//     })
//     console.log(classes)
// })

