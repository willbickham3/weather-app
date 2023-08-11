import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import weatherCard from "../components/weatherCard";
import createAnElement from "../components/createAnElement";

export default async function todayForecast(search) {
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);

    function timeofdayContent(todName, temperature, precipitationChance) {
        let timeofdayname = createAnElement('div', `${todName}`, null, `${todName}`);
        let todtemperature = createAnElement('div', `${temperature}`, null, `${temperature}°`);
        // let todweatherImage = createAnElement('img', `todImage`, img);
        let todprecipitationChance = createAnElement('div', 'precipitation', null, `${precipitationChance}`);
        return { timeofdayname, todtemperature, todprecipitationChance };
    }

    const forecastContainer = createAnElement('div', 'forecast-container', 'tod-bullets', '');

    const timeOfDaySections = [
        { name: 'Morning', hour: 6, day: 0 },
        { name: 'Afternoon', hour: 12, day: 0 },
        { name: 'Evening', hour: 18, day: 0 },
        { name: 'Overnight', hour: 0, day: 1 }
    ];

    for (const section of timeOfDaySections) {
        const sectionDiv = createAnElement('div', 'timeofday', section.name.toLowerCase(), null);
        const sectionContent = timeofdayContent(section.name, forecast.forecast.forecastday[0].hour[section.hour].temp_f, forecast.forecast.forecastday[0].hour[section.hour].chance_of_rain);
        sectionDiv.append(sectionContent.timeofdayname, sectionContent.todtemperature, sectionContent.todprecipitationChance);
        forecastContainer.append(sectionDiv); }


    weatherCard(`Today's Forecast for ${weather.location.name}`, `${weather.location.region}`, 'todays-forecast', '', '');
    // console.log(forecastContainer)
    let todaysForecast = document.querySelector('#todays-forecast');
    todaysForecast.append(forecastContainer);

}