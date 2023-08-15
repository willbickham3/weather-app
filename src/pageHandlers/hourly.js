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

    // console.log(formattedCurrent);
    // console.log(formattedDate);
    // console.log(hourlyArray[0].condition.icon);
    // console.log(hourlyArray[0].temp_f);
    // console.log(hourlyArray[0].feelslike_f);
    // console.log(hourlyArray[0].condition.text);
    // console.log(hourlyArray);
    // console.log(forecast);

    for (let i = formattedCurrent; i < hourlyArray.length; i++) {
        let hourContainer = createAnElement('div', 'slide', null, '')
        let a = createAnElement('div', 'a', null, `${formattedDate}`);
        let b = createAnElement('img', 'b', null, '');
        b.src = hourlyArray[i].condition.icon;
        let c = createAnElement('div', 'c', null, `${hourlyArray[i].temp_f}° F`);
        let d = createAnElement('div', 'd', null, `Feels like: ${hourlyArray[i].feelslike_f}° F`);
        let e = createAnElement('div', 'e', null, `${hourlyArray[i].condition.text}`);
        hourContainer.append(a, b, c, d, e);
        hourlyForecastContainer.append(hourContainer);
    }

    const leftCarouselButton = createAnElement('button', 'arrow-button', 'left-button', '‹');
    const rightCarouselButton = createAnElement('button', 'arrow-button', 'right-button', '›');
    // let currentSlide = 0;
    // rightCarouselButton.addEventListener('click', function() {
    //     currentSlide++
    // })
    
    // .forEach((slide, index) => {
    //     slide.style.transform = `translateX(${100 * (index - currentSlide)})`
    // })
    hourlyForecastContainer.prepend(leftCarouselButton)
    hourlyForecastContainer.append(rightCarouselButton);
    console.log(hourlyForecastContainer)
    weatherCard(header, hourlyForecastContainer, footer, '');
}