import createAnElement from "./createAnElement";

    export default function weatherCard(heading, heading2, id, content, footing) {
        const weatherContainer = document.querySelector('.weather-container');

        const container = createAnElement('div', 'sub-container', null, null);
        const headingDiv = createAnElement('h1', 'weather-heading', null, `${heading}`);
        const subHeadingDiv = createAnElement('h2', 'weather-sub-heading', null, `${heading2}`)
        const contentDiv = createAnElement('div', 'weather-content', id, `${content}`);
        const footingDiv = createAnElement('div', 'weather-footing', null, `${footing}`)

        container.append(headingDiv, subHeadingDiv, contentDiv, footingDiv);
        weatherContainer.append(container);
        return container
    }