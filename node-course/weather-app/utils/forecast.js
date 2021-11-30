const request = require('postman-request');
const geocode = require('./geocode');



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c2c80b17d8e8b109be608e4904fefa97&query=' + latitude + ',' + longitude

    // const deUrl = ({

    // })

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. ' + 'It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast

// const detail = (type1, type2, {
//     response.body.current.weather_descriptions[0]
// }) => {
//     console.log(type1, )
// }


// body: {
//     error,
//     daily
// }

// body(+'It is currently' + +'It feels like' + +'degrees out')


// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=c2c80b17d8e8b109be608e4904fefa97&query=' + latitude + ',' + longitude

//     // const deUrl = ({

//     // })


//     request({
//         url,
//         json: true
//     }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out.')
//         }



//     })
// }