export default async function getCurrentWeather(weatherlocation) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a732470edfbc4cbdb9220158230708&q=${weatherlocation}`, {mode: 'cors'});
    const weather = await response.json();
    let current = weather.current;
    let location = weather.location;
    console.log(current);
    console.log(location);
    return {current, location}
}