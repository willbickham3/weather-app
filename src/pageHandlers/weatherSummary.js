import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import weatherCard from "../components/weatherCard";
import format from "date-fns/format";
import createAnElement from "../components/createAnElement";

export default async function weatherSummary(search) {
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);

    let newdate = new Date(weather.current.last_updated);
    let formattedDate = format(newdate, "HH:mm");

    let content = createAnElement('div', 'weather-summary', null, '');
    const one = createAnElement('div', 'content-container', null, `As of ${formattedDate}`);
    const two = createAnElement('div', 'content-container', null, `${weather.current.temp_f}° F`);
    const three = createAnElement('div', 'content-container', null, 'this will have content');

    content.append(one, two, three)

    let highLow = `High: ${forecast.forecast.forecastday[0].day.maxtemp_f} | Low: ${forecast.forecast.forecastday[0].day.mintemp_f}`;

    if (weather.location.country == 'United States of America')
    {weather.location.country = weather.location.region};


    weatherCard(`${weather.location.name}, ${weather.location.country}`, content, highLow, null);
}
// , `As of ${formattedDate}`, 'weather-summary', `${weather.current.temp_f}° F`