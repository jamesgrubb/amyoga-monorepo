const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: "9pg4g5i0",
    dataset: "production",
    token: "",
    useCdn: false
})

module.exports = client