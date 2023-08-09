import getCurrentWeather from "./handleWeather/CurrentWeather";
import getForecast from "./handleWeather/forecast";
import createAnElement from "./components/createAnElement";

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
    getForecast(search);
    if (weather.location.country == 'United States of America')
    {weather.location.country = weather.location.region}
    populatePage(weather.location.name, weather.location.country, weather.current.temp_f);
}

function populatePage(location, country, temperature) {
    const mainContent = document.querySelector('.main-content');
    const subContainer = createAnElement('div', 'sub-container', null)
    const locationDiv = createAnElement('h1', 'location', `${location}, ${country}`);
    const temperatureDiv = createAnElement('div', 'temperature', `${temperature}° F`);
    subContainer.append(locationDiv, temperatureDiv)
    mainContent.prepend(subContainer);
}