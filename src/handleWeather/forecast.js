export default async function getForecast(weatherlocation) {
    const response = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=a732470edfbc4cbdb9220158230708&q=${weatherlocation}&days=3`, {mode: 'cors'});
    const forecast = await response.json();
    console.log(forecast);
    return forecast
}