// API Key: a732470edfbc4cbdb9220158230708
import getCurrentWeather from "./handleWeather/CurrentWeather";
import getForecast from "./handleWeather/forecast";
import inputButton from "./pageHandlers/interface";
import './style.css'

inputButton();
console.log(getCurrentWeather('navarre'));
console.log(getForecast('navarre'));
