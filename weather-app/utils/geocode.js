const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=8c55571e917f497fbf11e7e587cad4b4`
    request.get({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error)
            callback('Unable to connect to geocoding service!!')
        else if (body.features.length === 0)
            callback("Unable to find location!")
        else {
            // console.log(response.body.features[0])
            const data = {
                latitude: body.features[0].properties.lat,
                longitude: body.features[0].properties.lon,
                location: body.features[0].properties.formatted
            };
            callback(null, data);
        }
    })
}



module.exports = geocode