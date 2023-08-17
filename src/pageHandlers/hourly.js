import { format } from "date-fns";
import createAnElement from "../components/createAnElement";
import weatherCard from "../components/weatherCard";
import getForecast from "../handleWeather/forecast";

export default async function hourly(search) {
    let forecast = await getForecast(search);

    const header = createAnElement('div', 'hourly-weather', null, 'Hourly Forecast');
    const hourlyForecastContainer = createAnElement('div', 'hourly-container', 'slider', '');
    const footer = '';


    let hourlyArray = forecast.forecast.forecastday[0].hour;

    let newdate = new Date(hourlyArray[0].time);
    let formattedDate = format(newdate, "hh:mm aaaa");
    let currentTime = new Date(forecast.current.last_updated);
    let formattedCurrent = format(currentTime, "HH");
    if (formattedCurrent.startsWith('0')) {
        formattedCurrent.slice(1);
    }
    console.log(formattedCurrent)
    const slidesContainer = createAnElement('div', 'slides', null, '');

    const btnContainer = createAnElement('div', 'btn-container', null, '');
    const leftCarouselButton = createAnElement('button', 'arrow-button', 'left-button', '‹');
    const rightCarouselButton = createAnElement('button', 'arrow-button', 'right-button', '›');

    btnContainer.append(leftCarouselButton, rightCarouselButton);
    hourlyForecastContainer.append(slidesContainer, btnContainer);
    weatherCard(header, hourlyForecastContainer, footer, '');


    for (let i = formattedCurrent; i < (parseInt(formattedCurrent) + 4); i++) {
        let newdate = new Date(hourlyArray[i].time);
        let formattedDate = format(newdate, "hh:mm aaaa");
        let hourContainer = createAnElement('div', 'slide', null, '')
        let a = createAnElement('div', 'a', null, `${formattedDate}`);
        let b = createAnElement('img', 'b', null, '');
        b.src = hourlyArray[i].condition.icon;
        let c = createAnElement('div', 'c', null, `${hourlyArray[i].temp_f}° F`);
        let d = createAnElement('div', 'd', null, `Feels like: ${hourlyArray[i].feelslike_f}° F`);
        let e = createAnElement('div', 'e', null, `${hourlyArray[i].condition.text}`);
        hourContainer.append(a, b, c, d, e);
        slidesContainer.append(hourContainer);
    }
    const alltheSlides = document.querySelectorAll('.slide');
    console.log(alltheSlides.length);

}