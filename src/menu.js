import { addClass, addContentToElement, addElementToParent } from "./page-load";

export function loadMenu() {
    addElementToParent('#content', 'main');
    addClass('main', 'menu');
    addElementToParent('main', 'p');
    addClass('main > p', 'para');
    addContentToElement('.para', 'menumenumenu');
}