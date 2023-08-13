import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import weatherCard from "../components/weatherCard";
import createAnElement from "../components/createAnElement";

export default async function todayForecast(search) {
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);

    function timeofdayContent(todName, temperature, precipitationChance, imgsrc) {
        let timeofdayname = createAnElement('div', `${todName}`, null, `${todName}`);
        let todtemperature = createAnElement('div', `${temperature}`, null, `${temperature}°`);

        let todweatherImage = createAnElement('img', `todImage`, null, null);
        todweatherImage.src = imgsrc;

        let todprecipitationChance = createAnElement('div', 'precipitation', null, `${precipitationChance}`);
        return { timeofdayname, todtemperature, todweatherImage, todprecipitationChance };
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

        const sectionContent = timeofdayContent(
            section.name, 
            forecast.forecast.forecastday[section.day].hour[section.hour].temp_f, 
            forecast.forecast.forecastday[section.day].hour[section.hour].condition.text, 
            forecast.forecast.forecastday[section.day].hour[section.hour].condition.icon
            );

        sectionDiv.append(sectionContent.timeofdayname, sectionContent.todtemperature, sectionContent.todweatherImage, sectionContent.todprecipitationChance);

        forecastContainer.append(sectionDiv); 
    }
    let todaysForecast = createAnElement('div', 'todays-forecast', null , '');
    todaysForecast.append(forecastContainer)

    weatherCard(`Today's Forecast for ${weather.location.name}, ${weather.location.region}`, todaysForecast, '', 'todays-forecast');
}