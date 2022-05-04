import { wipeTab } from ".";
import { loadMenu } from "./menu";
import { addClass, addContentToElement, addElementToParent } from "./page-load";

export function loadHome() {
    addElementToParent('#content', 'main');
    addClass('main', 'home');
    
    addElementToParent('.home', 'h2');
    addClass('.home > h2', 'quote');
    addContentToElement('.quote', `The tastiest pizza 
    on the planet`);

    const button = addElementToParent('.home', 'button');
    addContentToElement('button', 'See Full Menu');
    button.addEventListener('click', () => {
        wipeTab();
        loadMenu();
    });
}
