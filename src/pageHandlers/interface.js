import createAnElement from "../components/createAnElement";
import weatherSummary from "./weatherSummary";
import todayForecast from "./todayForecast";
import weatherRemoval from "../components/weatherRemoval";
import hourly from "./hourly";
import moreWeather from "./moreWeather";

// weatherCard(heading, heading2, content, footing)

export default function inputButton() {
    const mainContent = document.querySelector('.main-content');
    const queryContainer = createAnElement('div', 'query-container', null, null);

    const locationInp = document.createElement('input');
    locationInp.type = 'text';
    locationInp.classList.add('location-input');
    locationInp.setAttribute('id', 'input');

    const searchBtn = document.createElement('button');
    searchBtn.classList.add('location-input');
    searchBtn.setAttribute('id', 'button');
    searchBtn.innerHTML = 'Search';
    searchBtn.addEventListener('click', clickSearch)

    queryContainer.append(locationInp, searchBtn)
    mainContent.append(queryContainer);
}

 async function clickSearch() {
    const input = document.querySelector('#input');
    let search = input.value;
    // let weather = await getCurrentWeather(search);
    // let forecast = await getForecast(search);
    weatherRemoval();
    await weatherSummary(search);
    await todayForecast(search);
    await hourly(search);
    await moreWeather(search);
    // console.log(weather)
}

export function populatePage() {
    const mainContent = document.querySelector('.main-content');
    const weatherContainer = createAnElement('div', 'weather-container', null, null);
    mainContent.append(weatherContainer);
}
