import weatherSummary from "./weatherSummary";
import todayForecast from "./todayForecast";
import hourly from "./hourly";
import moreWeather from "./moreWeather";

// Pre-determined value for the location
const locations = ['Navarre, FL', 'Boston, MA', 'Marietta, OH', 'Fort Walton Beach, FL'];
const predeterminedLocation = locations[Math.floor(Math.random() * locations.length)];

// Call the functions with the predetermined location
export default async function loadWeatherData() {
    await weatherSummary(predeterminedLocation);
    await todayForecast(predeterminedLocation);
    await hourly(predeterminedLocation);
    await moreWeather(predeterminedLocation);
}
