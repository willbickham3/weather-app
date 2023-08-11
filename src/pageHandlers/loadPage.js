import weatherSummary from "./weatherSummary";
import todayForecast from "./todayForecast";

// Pre-determined value for the location
const predeterminedLocation = "Navarre, FL";

// Call the functions with the predetermined location
export default async function loadWeatherData() {
    await weatherSummary(predeterminedLocation);
    await todayForecast(predeterminedLocation);

    // Any additional code that relies on the completion of both functions
}
