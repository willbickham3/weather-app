// API Key: a732470edfbc4cbdb9220158230708
import getCurrentWeather from "./handleWeather/CurrentWeather";
import getForecast from "./handleWeather/forecast";
import inputButton, { populatePage } from "./pageHandlers/interface";
import './style.css'
import format from "date-fns/format";

populatePage();
inputButton();
console.log(getCurrentWeather('navarre fl'));
console.log(getForecast('navarre fl'));

