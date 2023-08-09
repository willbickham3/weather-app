export default function createAnElement(element, classList, innerHTML) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(`${classList}`);
    newElement.innerHTML = innerHTML;
    return newElement
}