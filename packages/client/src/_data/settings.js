// const download = require('image-downloader')
const fs = require('fs');

const client = require('../utils/client')
const query = `*[_type == "siteSettings"] {
    ...,
    portrait{
        ...,
        asset->
    }
    }`


module.exports = async () => {

    const result = await client.fetch(query)
    // console.log(result[0].portrait.asset.url)
    // console.log(__dirname)
    // const options = {
    //     url: result[0].portrait.asset.url,
    //     dest: `${__dirname}/../images`
    // }
    // await download.image(options).then(({ filename }) => {
    //     console.log('Saved to', filename)
    // })
    //     .catch(err => console.error(err))
    return result
}
