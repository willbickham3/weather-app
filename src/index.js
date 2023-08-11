// API Key: a732470edfbc4cbdb9220158230708
import getCurrentWeather from "./handleWeather/CurrentWeather";
import getForecast from "./handleWeather/forecast";
import inputButton, { populatePage } from "./pageHandlers/interface";
import loadWeatherData from "./pageHandlers/loadPage";
import './style.css'

populatePage();
inputButton();
loadWeatherData();
console.log(getCurrentWeather('navarre fl'));
console.log(getForecast('navarre fl'));


