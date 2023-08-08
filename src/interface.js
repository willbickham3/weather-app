function createAnElement(element, classList, innerHTML) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(`${classList}`);
    newElement.innerHTML = innerHTML;
    return newElement
}

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
    let weather = await getWeather(search);
    populatePage(weather.loc, weather.locCapital, weather.temperature);
}

async function getWeather(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a732470edfbc4cbdb9220158230708&q=${location}`, { mode: 'cors' }).catch();
    const weather = await response.json();
    console.log(weather.current.temp_f);
    let temperature = weather.current.temp_f;
    let loc = weather.location.name;
    let locCapital = weather.location.country;
    if (locCapital == 'United States of America') {
        locCapital = weather.location.region;
    }
    console.log(weather)
    return {temperature, loc, locCapital}
}

function populatePage(location, country, temperature) {
    const mainContent = document.querySelector('.main-content');
    const subContainer = createAnElement('div', 'sub-container', null)
    const locationDiv = createAnElement('h1', 'location', `${location}, ${country}`);
    const temperatureDiv = createAnElement('div', 'temperature', `${temperature}° F`);
    subContainer.append(locationDiv, temperatureDiv)
    mainContent.prepend(subContainer);
}