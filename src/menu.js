import { addClass, addContentToElement, addElementToParent } from "./page-load";

const menuRecipes = [
    {
        name: 'Pizza Tonno',
        weight: '500g', 
        ingredients: 'sos roșii, ton, ceapă, lămâie, mozzarella, măsline'
    },
    {
        name: 'Pizza Hot',
        weight: '520g', 
        ingredients: 'sos roșii, chilli, salam, șuncă'
    }
];


function addItems(recipes) {
    for(let i = 0; i < recipes.length; i++) {
        const name = recipes[i].name;
        const weight = recipes[i].weight;
        const ingredients = recipes[i].ingredients;

        const item = addElementToParent('.menu', 'div');
        item.setAttribute('data-key', i+1);

        addElementToParent(`[data-key='${i+1}']`, 'p');
        addElementToParent(`[data-key='${i+1}']`, 'p');
        addElementToParent(`[data-key='${i+1}']`, 'p');

        addClass(`[data-key='${i+1}'] > p:nth-of-type(1)`, 'name');
        addClass(`[data-key='${i+1}'] > p:nth-of-type(2)`, 'ingredients');
        addClass(`[data-key='${i+1}'] > p:nth-of-type(3)`, 'weight');

        addContentToElement(`[data-key='${i+1}'] > .name`, name);
        addContentToElement(`[data-key='${i+1}'] > .ingredients`, ingredients);
        addContentToElement(`[data-key='${i+1}'] > .weight`, weight);

        addClass(`[data-key='${i+1}']`, 'item');
    }
}

export function loadMenu() {
    addElementToParent('#content', 'main');
    addClass('main', 'menu');

    addItems(menuRecipes);
}
