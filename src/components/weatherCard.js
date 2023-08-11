import createAnElement from "./createAnElement";

    export default function weatherCard(heading, heading2, id, content, footing) {
        const weatherContainer = document.querySelector('.weather-container');

        const container = createAnElement('div', 'sub-container', null, null);
        const headingDiv = createAnElement('h1', 'weather-heading', null, `${heading}, ${heading2}`);
        const contentDiv = createAnElement('div', 'weather-content', id, `${content}`);
        const footingDiv = createAnElement('div', 'weather-footing', null, `${footing}`)

        container.append(headingDiv, contentDiv, footingDiv);
        weatherContainer.append(container);
        return container
    }