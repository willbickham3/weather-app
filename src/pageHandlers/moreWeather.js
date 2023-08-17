import createAnElement from "../components/createAnElement";
import weatherCard from "../components/weatherCard";
import getForecast from "../handleWeather/forecast";
import thermometer from "../images/svgs/thermometer.svg";
import barometer from "../images/svgs/barometer.svg";
import humidity from "../images/svgs/humidity.svg";
import uvIndex from "../images/svgs/uv-index.svg";
import visibility from "../images/svgs/visibility.svg";
import wind from "../images/svgs/wind.svg";


export default async function moreWeather(search) {
    let weather = await getForecast(search);

    const heading = createAnElement('div', 'more-heading', null, '');
    const content = createAnElement('div', 'more-weather', null, '');
    const footing = createAnElement('div', 'more-footing', null, '');

    const moreContent = createAnElement('div', 'more-stuff', null, '');

    function moreWeatherContent(content, number, srcURL) {
        let img = createAnElement('img', 'more-img', null, '');
        img.src = srcURL;
        let weathercontent = createAnElement('div', 'more-content', null, `${content}`);
        let num = createAnElement('div', 'more-number', null, `${number}`);
        return { img, weathercontent, num }
    }
    
    const sections = [
        {name: 'high-low', content: 'High/Low', number: `${weather.forecast.forecastday[0].day.maxtemp_f}/${weather.forecast.forecastday[0].day.mintemp_f}`, imgSrc: `${thermometer}`},
        {name: 'wind', content: 'Wind', number: `${weather.current.gust_mph} mph ${weather.current.wind_dir}`, imgSrc: `${wind}`},
        {name: 'humidity', content: 'Humidity', number: `${weather.current.humidity}`, imgSrc: `${humidity}`},
        // {name: 'dewpoint', content: 'Dew Point', number: `${weather.}`, imgSrc: `${}`},
        {name: 'pressure', content: 'Air Pressure', number: `${weather.current.pressure_in} in.`, imgSrc: `${barometer}`},
        {name: 'uv-index', content: 'UV Index', number: `${weather.current.uv}`, imgSrc: `${uvIndex}`},
        {name: 'visibility', content: 'Visibility', number: `${weather.current.vis_miles} mi.`, imgSrc: `${visibility}`},
        {name: 'moon-phase', content: 'Moon Phase', number: `${weather.forecast.forecastday[0].astro.moon_phase}`, imgSrc: `${thermometer}`}
    ]

    for (const section of sections) {
        let meatContainer = createAnElement('div', 'more-content', `${section.name}`, '');

        let meat = moreWeatherContent(section.content, section.number, section.imgSrc);

        meatContainer.append(meat.img, meat.weathercontent, meat.num);

        moreContent.append(meatContainer);
    }

    


    const sunStuff = createAnElement('div', 'sun-stuff', null, '');

    // Appended to sunstuff
    // const temp = createAnElement('div', 'more-temp', null, '');
    // const feelsLike = createAnElement('div', 'feelsLike', null, `Feels like ${weather.current.feelslike_f}° F`);

    // Wind Container
    // const wind = createAnElement('div', 'wind', null, '');
    // const windImg = createAnElement('img', 'more-img', null, '');
    // const  = createAnElement('div', 'more-content', null, '');
    // const  = createAnElement('div', 'more-number', null, '');

    // Humidity Container
    // const humidity = createAnElement('div', 'humidity', null, '');
    // const  = createAnElement('img', 'more-img', null, '');
    // const  = createAnElement('div', 'more-content', null, '');
    // const  = createAnElement('div', 'more-number', null, '');

    // Dew Point Container
    // const dewPoint = createAnElement('div', 'dew-point', null, '');
    // const  = createAnElement('img', 'more-img', null, '');
    // const  = createAnElement('div', 'more-content', null, '');
    // const  = createAnElement('div', 'more-number', null, '');

    // Pressure Container
    // const pressure = createAnElement('div', 'pressure', null, '');
    // const  = createAnElement('img', 'more-img', null, '');
    // const  = createAnElement('div', 'more-content', null, '');
    // const  = createAnElement('div', 'more-number', null, '');

    // UV Index Container
    // const uvIndex = createAnElement('div', 'uvIndex', null, '');
    // const  = createAnElement('img', 'more-img', null, '');
    // const  = createAnElement('div', 'more-content', null, '');
    // const  = createAnElement('div', 'more-number', null, '');



    // const  = createAnElement('div', 'visibility', null, '');
    // const  = createAnElement('div', 'moon-phase', null, '');



    // temp.append(feelsLike);

    // sunStuff.append();
    // moreContent.append();

    content.append(sunStuff, moreContent)
    weatherCard(heading, content, '', 'more-weather');
}