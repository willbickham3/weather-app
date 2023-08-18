import createAnElement from "../components/createAnElement";
import weatherCard from "../components/weatherCard";
import getForecast from "../handleWeather/forecast";
import thermometer from "../images/svgs/thermometer.svg";
import barometer from "../images/svgs/barometer.svg";
import humidity from "../images/svgs/humidity.svg";
import uvIndex from "../images/svgs/uv-index.svg";
import visibility from "../images/svgs/visibility.svg";
import wind from "../images/svgs/wind.svg";
import firstquarter from "../images/svgs/moon-phases/firstquarter.svg";
import waxingcrescent from "../images/svgs/moon-phases/waxingcrescent.svg";
import full from "../images/svgs/moon-phases/full.svg";
import waningcrescent from "../images/svgs/moon-phases/waningcrescent.svg";
import lastquarter from "../images/svgs/moon-phases/lastquarter.svg";
import newmoon from "../images/svgs/moon-phases/newmoon.svg";
import waninggibbous from "../images/svgs/moon-phases/waninggibbous.svg";
import waxinggibbous from "../images/svgs/moon-phases/waxinggibbous.svg";


export default async function moreWeather(search) {
    let weather = await getForecast(search);


    // 3 main categories that are arguments for weatherCard at the bottom
    const heading = createAnElement('div', 'more-heading', null, '');
    const content = createAnElement('div', 'more-weather', null, '');
    const footing = createAnElement('div', 'more-footing', null, '');


    // This sets moonphase to one of the SVG's in images for use in Sections object
    let moonphase = weather.forecast.forecastday[0].astro.moon_phase;
    switch (moonphase) {
        case 'Waxing Crescent':
            moonphase = waxingcrescent;
            break

        case 'Waning Crescent':
            moonphase = waningcrescent;
            break

        case 'New Moon':
            moonphase = newmoon;
            break

        case 'Full Moon':
            moonphase = full;
            break
        
        case 'Waning Gibbous':
            moonphase = waninggibbous;
            break

        case 'Last Quarter':
            moonphase = lastquarter;
            break

        case 'First Quarter':
            moonphase = firstquarter;
            break

        case 'Waxing Gibbous':
            moonphase = waxinggibbous;
            break
        
        default:
            moonphase = full;
    }   


    // moreContent and moreWeatherContent are the builders for the main part of the weathercard
    const moreContent = createAnElement('div', 'more-stuff', null, '');

    function moreWeatherContent(content, number, srcURL) {
        let img = createAnElement('img', 'more-img', null, '');
        img.src = srcURL;
        let weathercontent = createAnElement('div', 'more-content', null, `${content}`);
        let num = createAnElement('div', 'more-number', null, `${number}`);
        return { img, weathercontent, num }
    }
    
    // This is setting all the parameters for weatherCard. More can be added as needed or taken out or moved around!
    const sections = [
        {name: 'high-low', content: 'High/Low', number: `${weather.forecast.forecastday[0].day.maxtemp_f}/${weather.forecast.forecastday[0].day.mintemp_f}`, imgSrc: `${thermometer}`},
        {name: 'wind', content: 'Wind', number: `${weather.current.gust_mph} mph ${weather.current.wind_dir}`, imgSrc: `${wind}`},
        {name: 'humidity', content: 'Humidity', number: `${weather.current.humidity}`, imgSrc: `${humidity}`},
        {name: 'pressure', content: 'Air Pressure', number: `${weather.current.pressure_in} in.`, imgSrc: `${barometer}`},
        {name: 'uv-index', content: 'UV Index', number: `${weather.current.uv}`, imgSrc: `${uvIndex}`},
        {name: 'visibility', content: 'Visibility', number: `${weather.current.vis_miles} mi.`, imgSrc: `${visibility}`},
        {name: 'moon-phase', content: 'Moon Phase', number: `${weather.forecast.forecastday[0].astro.moon_phase}`, imgSrc: `${moonphase}`}
    ]

    for (const section of sections) {
        let container = createAnElement('div', 'more-content', `${section.name}`, '');

        let content = moreWeatherContent(section.content, section.number, section.imgSrc);

        container.append(content.img, content.weathercontent, content.num);

        moreContent.append(container);
    }

    const sunStuff = createAnElement('div', 'sun-stuff', null, '');

    content.append(sunStuff, moreContent)
    weatherCard(heading, content, '', 'more-weather');
}