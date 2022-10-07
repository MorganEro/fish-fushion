const { boatInventory } = require("./fishingBoat.js")
// This module must import and invoke the function that is exported by the fishing boat module. This module should also define and export its own function that generates its own inventory that restaurants can use to purchase fish for their daily menus. The returned inventory should be an array of objects.

//The exported function must be named mongerInventory.

//if fish quantity >= 10, buys 10
// can input price limit and not buy if > price limit
//new fish quantity should be 10 since she only buys 10.


//the function should- 
    //have two parameters (boatInventory, chefFishPriceMax)
    //loop through the objects in the incoming array
        //create if statement to check a few conditions
            // check quantity and if >= 10, go to next step
            // check price of fish in  boatInventory and if >= chef's inputted price, add to menu
        //if it meets both requirements add to menu
const mongerMenu = boatInventory()   

 const mongerInventory = (chefFishPriceMax) => {
     const newMongerMenu = []
     for (const fish of mongerMenu) {
        if (fish.amount >= 10 && fish.price <= chefFishPriceMax) {
                newMongerMenu.push(fish)           
                fish.amount = 10
            }
                    
        } 
    return newMongerMenu      
    }
    
//const menu = mongerInventory(7)

//console.log({"fishMonger":menu})

module.exports = { mongerInventory }