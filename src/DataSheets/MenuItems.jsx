import ME from '../assets/img/MenuIcons/dish.svg';
import SP from '../assets/img/MenuIcons/menubook.svg';
import Side from '../assets/img/MenuIcons/ricebowl.svg';
import drink from '../assets/img/MenuIcons/soda.svg';

const MenuCategories = [
    {
        name:"Main Entree's",
        img:`${ME}`
    },
    {
        name: "Specials",
        img:`${SP}`
    }, 
    {
       name: "Sides",
       img:`${Side}`
    },
    {
        name:"Drink's",
        img:`${drink}`
    }
]


const MenuEntrees = [
    {
        index:'E01',
        itemName:'Brazilian Bibimbap Bowl',
        unitPrice:'13.00',
        description:`This Bowl Of Latin Seoul Is A Fan Fave That Contains A Selection Of Hearty Latin-Korean Flavors. In Order To Enjoy This Dish Properly, You Can Put The Lid On The Bowl And Shake It Around To Fuse The Flavors And Enjoy!
        Each Bowl Contains: Sticky Chimichurri Rice, Black Beans, Lettuce, Bulgogi Beef Strips, Mango Pico, Kimchi, Korean Cucumber Salad, Diced Sweet Potatoes, A Sprinkle Of Green Onions, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes.`,
        addOn:'Add A Sunny Side Up Egg On Top For An Extra',
        addOnPrice:'1.00'    
    },
  
    {
        index:'E02',
        itemName:'Bulgogi Bowl',
        unitPrice:'12.00',
        description:`This Bowl Is Korean Comfort Food. It Contains Sticky Rice, Bulgogi Ground Beef, Korean Radish, Sprouts, Guacamole, Kimchi, Cucumber Salad, Korean Carrots, Mildly Spicy Mayo, A Sprinkle Of Green Onions, And A Dusting Of Mild Gochugaru Flakes. Don’t Forget To Shake And Enjoy!`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E03',
        itemName:'Japchae (Chop-Chae) Noodle Bowl',
        unitPrice:'12.00',
        description:`Japchae, Sweet Potato Noodles (A.K.A. Glass Noodles) Stir Fried With Vegetables And Chicken or 6 Korean Meatballs, Is One Of Korea’s Best-Loved Dishes. It Reheats Well And Is A Favorite For People Who Are Carefully Starting To Try Korean Food.Each Bowl Contains: Sweet Potato (Glass) Noodles Mixed With A Stir Fry Of Chicken, Onions, Peppers, Mushrooms, Broccoli, And Carrots. The Sauce Has A Familiar Asian Flavor With A Touch Of South American Flare.`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E04',
        itemName:'Mandu – Korean Fried Dumplings (8)',
        unitPrice:'11.00',
        description:`Our Dumplings Are Made With Chicken, Veggies, And A Whole Lot Of Love. We Serve Them With Our Special Latin Seoul Dipping Sauce And A Side Of Kimchi And Korean Slaw.`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E05',
        itemName:'Latin Seoul Tacos (3)',
        unitPrice:'11.00',
        description:'Our 3 Latin Seoul Tacos Are Made With Corn Or Flour Tortillas, Sticky Chimichurri Rice, Bulgogi Beef Or Chicken, Queso Fresco, Korean Cole Slaw, Mango Pico, A Sprinkle Of Green Onions, Sprouts, Lime Wedge On The Side, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes. These Tacos Are Bursting With Flavor And Pair Nicely With Our Freshly Cooked And Perfectly Seasoned Black Beans And Kimchi!',
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E06',
        itemName:'Kids Meal',
        unitPrice:'9.00',
        description:`4 Korean Meatballs with black Beans and Sticky Chimi Rice. Yummy and Simple.`,
        addOn:'place4',
        addOnPrice:'place5'    
    },
    
]


const MenuCartData = [
    {
        item: 'Beef Bugogi',
        quantity: '1',
        total:'13.00'
    }
]
export default MenuCategories;

export {
    MenuEntrees,

  }



// {
//     index:'E02',
//     itemName:'place1',
//     unitPrice:'place2',
//     description:`place3`,
//     addOn:'place4',
//     addOnPrice:'place5'    
// },