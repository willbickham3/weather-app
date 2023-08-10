import createAnElement from "./createAnElement";

    export default function weatherCard(heading, heading2, content, footing) {
        const weatherContainer = document.querySelector('.weather-container');

        const container = createAnElement('div', 'sub-container', null);
        const headingDiv = createAnElement('h1', 'weather-heading', `${heading}, ${heading2}`);
        const contentDiv = createAnElement('div', 'weather-content', `${content}° F`);
        const footingDiv = createAnElement('div', 'weather-footing', `${footing}`)

        container.append(headingDiv, contentDiv, footingDiv);
        weatherContainer.append(container);
        return container
    }