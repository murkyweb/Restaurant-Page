import { addClass, addContentToElement, addElementToParent } from "./page-load";

export function loadHome() {
    addElementToParent('#content', 'main');
    addClass('main', 'home');
    addElementToParent('main', 'p');
    addClass('main > p', 'para');
    addContentToElement('.para', 'adsadasdsadad');
}