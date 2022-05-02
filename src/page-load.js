import { loadHome } from "./home";

function addElementToParent(target, elem) {
    const element = document.createElement(`${elem}`);
    const parent = document.querySelector(`${target}`);
    parent.appendChild(element);
}

function addContentToElement(elem, content) {
    const element = document.querySelector(`${elem}`);
    element.innerText = `${content}`;
}

function createHeader() {
    addElementToParent('#content', 'header');
    addElementToParent('header', 'h1');
}

function createNavBar() {
    addElementToParent('header', 'nav');
    addElementToParent('nav', 'ul');
    addElementToParent('ul', 'li');
    addElementToParent('ul', 'li');
    addElementToParent('ul', 'li');

    addContentToElement('h1', 'Pizzeria');
    addContentToElement('li:nth-of-type(1)', 'Home');
    addContentToElement('li:nth-of-type(2)', 'Menu');
    addContentToElement('li:nth-of-type(3)', 'Contact');
}

function pageLoad() {
    createHeader();
    createNavBar();
    loadHome();
}  

function addClass(elem, cls) {
    const element = document.querySelector(`${elem}`);
    element.classList.add(`${cls}`);
}

export { addElementToParent, addContentToElement, addClass, pageLoad };