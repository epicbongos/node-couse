const request = require('postman-request');

const geocode = (address, fn) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3RvbmtlZSIsImEiOiJja3BobmlqN3YwNDN2Mm9ueDhna3IweHkzIn0.Mm0So6CKAIpL2rcZvS56_A&limit=1'

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            fn('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            fn('Unable to find location. Try another search.', undefined)
        } else {
            fn(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode

// body: {
//     error,
//     daily,
//     currently
// }

// const errorStatement = {
//     first
// }