import { wipeTab } from ".";
import { loadMenu } from "./menu";
import { addClass, addContentToElement, addElementToParent } from "./page-load";

export function loadHome() {
    addElementToParent('#content', 'main');
    addClass('main', 'home');
    addElementToParent('.home', 'p');
    addClass('.home > p', 'para');
    addContentToElement('.para', `The tastiest pizza 
    on the planet`);
    addElementToParent('.home', 'button');
    addContentToElement('button', 'See Full Menu');
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        wipeTab();
        loadMenu();
    });
}