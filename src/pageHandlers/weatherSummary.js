import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import weatherCard from "../components/weatherCard";

export default async function weatherSummary() {
    const input = document.querySelector('#input');
    let search = input.value;
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);
    let highLow = `High: ${forecast.forecast.forecastday[0].day.maxtemp_f} | Low: ${forecast.forecast.forecastday[0].day.mintemp_f}`;
    if (weather.location.country == 'United States of America')
    {weather.location.country = weather.location.region};
    weatherCard(weather.location.name, weather.location.country, weather.current.temp_f, highLow);
}