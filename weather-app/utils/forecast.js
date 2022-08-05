const request = require('request')

const forecast = (
    latitude,
    longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a52bc381bfcfa55dea5bce24a7bf56dc&query=${latitude},${longitude}`
    request.get({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service!!')
        } else if (body.error)
            callback(body.error.info);
        else {
            const {
                temperature,
                feelslike,
                weather_descriptions: weatherDescriptions
            } = body.current;
            callback(null, weatherDescriptions[0] + `. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`)
        }
    });
}



module.exports = forecast;