import getCurrentWeather from "../handleWeather/CurrentWeather";
import getForecast from "../handleWeather/forecast";
import createAnElement from "../components/createAnElement";
import weatherCard from "../components/weatherCard";
import weatherSummary from "./weatherSummary";

// weatherCard(heading, heading2, content, footing)

export default function inputButton() {
    const mainContent = document.querySelector('.main-content');
    const queryContainer = createAnElement('div', 'query-container', null);

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
    let weather = await getCurrentWeather(search);
    let forecast = await getForecast(search);
    populatePage();
    weatherSummary();
    console.log(weather)
}

function populatePage() {
    const mainContent = document.querySelector('.main-content');
    const weatherContainer = createAnElement('div', 'weather-container', null);
    mainContent.append(weatherContainer);
}