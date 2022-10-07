const { mongerInventory } = require("./fishMonger.js")

/*
1.should have input for maximum price to spend(done in fishMonger)
2. If fish at that price point or less, the chef buys 50% of inventory or 5 to be specific
The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
Tuna Soup
Tuna Sandwich
Grilled Tuna
Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/

const importedMenuItems = mongerInventory(7)
// 1. function with a for loop to check each fish and add it to the html menu
const fishMenu = () => {
    let menuItems= ""
    /*for (fishToBuy of importedMenuItems ) {
        fishToBuy.amount / 2
        
    }*/
    for (fishItems of importedMenuItems) {
        menuItems += `<h1>Menu</h1>\n
        <article class="menu">\n
            \t<h2>${fishItems.species}</h2>\n
            \t<section class="menu__item">${fishItems.species} Soup</section>\n
            \t<section class="menu__item">${fishItems.species} Sandwich</section>\n
            \t<section class="menu__item">Grilled ${fishItems.species}</section>\n
        </article>`
    }

    return menuItems

} 
//finalMenu = fishMenu(importedMenuItems)
//console.log(finalMenu) 









module.exports = { fishMenu }