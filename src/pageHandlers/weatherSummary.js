import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import weatherCard from "../components/weatherCard";
import format from "date-fns/format";

export default async function weatherSummary(search) {
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);

    let newdate = new Date(weather.current.last_updated);
    let formattedDate = format(newdate, "HH:mm");

    let highLow = `High: ${forecast.forecast.forecastday[0].day.maxtemp_f} | Low: ${forecast.forecast.forecastday[0].day.mintemp_f}`;
    if (weather.location.country == 'United States of America')
    {weather.location.country = weather.location.region};
    weatherCard(`${weather.location.name}, ${weather.location.country}`, `As of ${formattedDate}`, 'weather-summary', `${weather.current.temp_f}° F`, highLow);
}