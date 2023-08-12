import createAnElement from "./createAnElement";

    export default function weatherCard(heading, content, footing, id) {
        const weatherContainer = document.querySelector('.weather-container');

        const container = createAnElement('div', 'sub-container', null, null);
        const headingDiv = createAnElement('h1', 'weather-heading', null, `${heading}`);
        const contentDiv = createAnElement('div', 'weather-content', id, null);
        const footingDiv = createAnElement('div', 'weather-footing', null, `${footing}`);

        contentDiv.append(content);

        container.append(headingDiv, contentDiv, footingDiv);
        weatherContainer.append(container);
        return container
    }