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
    const one = createAnElement('div', 'content', 'current-temperature', `${weather.current.temp_f}° F`);
    const two = createAnElement('div', 'content', 'current-condition', `${weather.current.condition.text}`);
    const three = createAnElement('img', 'content-container', null, '');
    three.src = weather.current.condition.icon

    content.append(one, two, three)

    let highLow = `High: ${forecast.forecast.forecastday[0].day.maxtemp_f} | Low: ${forecast.forecast.forecastday[0].day.mintemp_f}`;

    if (weather.location.country == 'United States of America')
    {weather.location.country = weather.location.region};

    let weatherHeader = createAnElement('div', 'weather-header', null, '');
    let weatherLocation = createAnElement('div', 'weather-location', null, `${weather.location.name}, ${weather.location.country}`);
    let asOfTimer = createAnElement('div', 'asOf', null, `As of ${formattedDate}`);

    weatherHeader.append(weatherLocation, asOfTimer);

    weatherCard(weatherHeader, content, highLow, null);


}
// , `As of ${formattedDate}`, 'weather-summary', `${weather.current.temp_f}° F`