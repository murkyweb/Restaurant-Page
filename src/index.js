import './style.css';
import { pageLoad } from "./page-load";
import { loadHome } from './home';
import { loadMenu } from './menu';

function switchTab(tab) {
    switch (tab) {
        case 'Home':
            loadHome();
            break;
        case 'Menu':
            loadMenu();
            break;
        case 'Contact':

            break;
    }
}

function activateNavBar() {
    const links = document.querySelectorAll('li');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
            wipeTab();
            const tab = e.target.innerText;
            switchTab(tab);
        });
    }
}

function wipeTab() {
    const main = document.querySelector('main');
    main.parentElement.removeChild(main);
}

pageLoad();
activateNavBar();


