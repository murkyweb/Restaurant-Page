import { addClass, addContentToElement, addElementToParent } from "./page-load";

function addAddress() {
    addElementToParent('.contact > ul', 'li');
    addElementToParent('.contact li:nth-of-type(1)', 'address');
    addElementToParent('address', 'h2');
    addClass('address > h2', 'title');
    addContentToElement('address > .title', 'Address');
    addElementToParent('address', 'p');
    addContentToElement('address > p', `1422 Memory Lane
    60115, Dekalb`);
}

function addPhoneNumber() {
    addElementToParent('.contact > ul', 'li');
    addElementToParent('.contact li:nth-of-type(2)', 'h2');
    addClass('.contact li:nth-of-type(2) > h2', 'phone-number');
    addContentToElement('.phone-number', 'Phone number');
    addElementToParent('.contact li:nth-of-type(2)', 'p');
    addContentToElement('.contact li:nth-of-type(2) > p', '815-897-0306');
}

function addSchedule() {
    addElementToParent('.contact > ul', 'li');
    addElementToParent('.contact li:nth-of-type(3)', 'h2');
    addClass('.contact li:nth-of-type(3) > h2', 'schedule');
    addContentToElement('.schedule', 'Schedule');
    addElementToParent('.contact li:nth-of-type(3)', 'p');
    addContentToElement('.contact li:nth-of-type(3) > p', ' 10:00 - 23:00');
}

function loadContact() {
    addElementToParent('#content', 'main');
    addClass('main', 'contact');
    addElementToParent('.contact', 'ul');
    
    addAddress();
    addPhoneNumber();
    addSchedule();
}

export { loadContact };

