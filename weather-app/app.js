//http://api.weatherstack.com/current?access_key=a52bc381bfcfa55dea5bce24a7bf56dc&query=37.8267,-122.4233
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = require('request')

const locationQuery = process.argv[2];

if (!locationQuery)
    console.log("Please provide an address!");
else
    geocode(locationQuery, (error, {
        latitude,
        longitude,
        location
    } = {}) => {
        if (error)
            return console.log("Error:", error)

        // console.log(geocodeData)
        forecast(latitude, longitude, (error, forecastData) => {
            if (error)
                return console.log("Error:", error)

            console.log(location);
            console.log(forecastData)
        });

    })