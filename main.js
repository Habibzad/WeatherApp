// Constants
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const appid = "&APPID=8b91623958e04d8ba96414e6c74436b5";

// Variables
let city;
let cityOutput = document.querySelector("#city");
let cityWeather = document.querySelector("#weather-condition");

$(document).ready(function () {
    $('form').submit(function () {
        // your code here (build up your url)
        $.get(url, function (res) {
            // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});

