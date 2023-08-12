import weatherSummary from "./weatherSummary";
import todayForecast from "./todayForecast";

// Pre-determined value for the location
const locations = ['Navarre, FL', 'Boston, MA', 'Marietta, OH'];
const predeterminedLocation = locations[Math.floor(Math.random() * locations.length)];

// Call the functions with the predetermined location
export default async function loadWeatherData() {
    await weatherSummary(predeterminedLocation);
    await todayForecast(predeterminedLocation);
}
