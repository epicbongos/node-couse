const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const fs = require('fs')

console.log(process.argv)

// const address = process.argv[2]
// if (!address) {
//     console.log('address please')
// } else {
//     geocode(address, (error, {
//             latitude,
//             longitude,
//             location
//         },
//         forecast = {
//             latitude,
//             longitude,
//         }()) => {
//         if (error) {
//             console.log('weather please')
//         }

//         console.log(location)
//         console.log(forecastData)
//     })
// }

// const address = process.argv[2]
// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, {
//         latitude,
//         longitude,
//         location
//     }) => {
//         if (error) {
//             return console.log(error)
//         }
//         forecast(() => {
//             if (error) {
//                 return console.log(error)
//             }

//             console.log(location)
//             console.log(forecastData)

//         })
//     })
// }

const address = process.argv[2]
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {
        latitude,
        longitude,
        location
    } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
// function geocode_cb(error, data) {
//     if (error) {
//         return console.log(error)
//     }

//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }

//         console.log(data.location)
//         console.log(forecastData)
//     })
// }

// const address = process.argv[2]
// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, geocode_cb)
// }

// 
// Object destructuring
// Callback











// const address = process.argv[2]
// if (!address) {
//     console.log('Adress please')
// } else {
//     geocode(address, (error, {
//         latitude,
//         longitude,
//         location
//     }) => {

//     })
// }

// const address = process.argv[2]
// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, {
//         latitude,
//         longitude,
//         location
//     } = {}) => {
//         if (error) {
//             return console.log(error)
//         }
//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }
//             console.log(location)
//             console.log(forecastData)

//         })
//     })
// }


// const deAddress = {

// }

// const destGeo = ({
//     error,
//     data,
// })





















// geocode('Philadelphia', (error, data) => {

//     console.log('Error', error)
//     console.log('Data', data)
//     forecast(data.latitude, data.longitude, (error, data) => {
//         console.log('Error', error)
//         console.log('Data', data)
//     })
// })

// geocode('Philadelphia', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// forecast(44.1545, -75.7088, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })



// const url = 'http://api.weatherstack.com/current?access_key=c2c80b17d8e8b109be608e4904fefa97&query=37.8267,-122.4233&units=f'

// request({
//     url: url,
//     json: true,
// }, (error, response) => {
//     // console.log(response.body.current)
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
//     // const data = JSON.parse(response.body) THIS DOESN"T NEEDED ANYMORE CAUSE THERE'S json:true
//     // console.log(data.current) 

// })

// // Geocoding
// // Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RvbmtlZSIsImEiOiJja3BobmlqN3YwNDN2Mm9ueDhna3IweHkzIn0.Mm0So6CKAIpL2rcZvS56_A&limit=1'
// request({
//     url: geocodeURL,
//     json: true,
// }, (error, response) => {
//     // console.log(response.body.features.place_name) 
//     if (error) {
//         console.log('Unable to connect to location services')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })