export default function weatherRemoval() {
    const weather = document.querySelectorAll('.sub-container');
    console.log(weather);
    weather.forEach(container => {
        container.remove();
    })
}