// Constants
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const appid = "&APPID=8b91623958e04d8ba96414e6c74436b5";
const unit = "&units=imperial";
const cityOutput = document.querySelector("#city");
const cityWeather = document.querySelector("#weather-condition");
const temperature = document.querySelector("#temp");
const coord = document.querySelector("#coord");
// Variables
let city;

$(document).ready(function () {
    $('form').submit(function () {
        // your code here (build up your url)
        city = document.querySelector("#location").value;
        $.get(url + city + unit + appid, function (res) {
            // your code here
            console.log(res);
            cityOutput.innerHTML = res.name;
            cityWeather.innerHTML = res.weather[0].description;
            temperature.innerHTML = res.main.temp;
            coord.innerHTML = res.coord.lat + " " + res.coord.lon;
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});

