export default function createAnElement(element, classList, id, innerHTML) {
    const newElement = document.createElement(`${element}`);
    newElement.classList.add(`${classList}`);
    newElement.innerHTML = innerHTML;
    if (id === null) {
        id = ''
    }
    else {
        newElement.setAttribute('id', id)
    }
    return newElement
}