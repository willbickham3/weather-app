import createAnElement from "./createAnElement";

    export default function weatherCard(heading, content, footing, id) {
        const weatherContainer = document.querySelector('.weather-container');

        const container = createAnElement('div', 'sub-container', null, null);
        const headingDiv = createAnElement('div', 'weather-heading', null, '');
        const contentDiv = createAnElement('div', 'weather-content', id, null);
        const footingDiv = createAnElement('div', 'weather-footing', null, `${footing}`);

        headingDiv.append(heading);
        contentDiv.append(content);

        container.append(headingDiv, contentDiv, footingDiv);
        weatherContainer.append(container);
        return container
    }