import { addClass, addContentToElement, addElementToParent } from "./page-load";

const menuRecipes = [];

const pizzaFactory = (name, weight, ingredients) => {
    return { name, weight, ingredients };
}

function addItemsToMenu () {
    menuRecipes.push(pizzaFactory('DIAVOLA', '693g', 'Tomato sauce, mozzarella, pepperoni, black olives, tomatoes and chorizo.'));
    menuRecipes.push(pizzaFactory('CAPRICCIOSA', '695g', 'Tomato sauce, mozzarella, ham, mushrooms and tomatoes.'));
    menuRecipes.push(pizzaFactory('QUATTRO STAGIONI', '704g', 'Tomato sauce, mozzarella, ham, chorizo, mushrooms, green peppers.'));
    menuRecipes.push(pizzaFactory('PEPPERONI', '659g', 'Tomato sauce, mozzarella, pepperoni, extra pepperoni and extra mozzarella.'));
    menuRecipes.push(pizzaFactory('VEGETARIAN', '775g', 'Tomato sauce, mozzarella, onion, mushrooms, black olives and corn.'));
    menuRecipes.push(pizzaFactory('QUATTRO FORMAGGI', '652g', 'Creamy sauce, mozzarella 100% natural, cheddar, parmesan and cheese.'));
}

function addItemsToDOM(recipes) {
    for(let i = 0; i < recipes.length; i++) {
        const name = recipes[i].name;
        const weight = recipes[i].weight;
        const ingredients = recipes[i].ingredients;

        const item = addElementToParent('.menu', 'div');
        item.setAttribute('data-key', i+1);

        addElementToParent(`[data-key='${i+1}']`, 'p');
        addElementToParent(`[data-key='${i+1}']`, 'p');
        addElementToParent(`[data-key='${i+1}']`, 'p');
        const picture = addElementToParent(`[data-key='${i+1}']`, 'img');
        picture.src = `pizza_images/${name.toLowerCase()}.png`;

        addClass(`[data-key='${i+1}'] > p:nth-of-type(1)`, 'name');
        addClass(`[data-key='${i+1}'] > p:nth-of-type(2)`, 'ingredients');
        addClass(`[data-key='${i+1}'] > p:nth-of-type(3)`, 'weight');
        addClass(`[data-key='${i+1}'] > img`, 'picture');

        addContentToElement(`[data-key='${i+1}'] > .name`, name);
        addContentToElement(`[data-key='${i+1}'] > .ingredients`, ingredients);
        addContentToElement(`[data-key='${i+1}'] > .weight`, weight);
        

        addClass(`[data-key='${i+1}']`, 'item');
    }
}

function loadMenu() {
    addElementToParent('#content', 'main');
    addClass('main', 'menu');

    addItemsToDOM(menuRecipes);
}

export { loadMenu, addItemsToMenu };


