import ME from '../assets/img/MenuIcons/dish.svg';
import SP from '../assets/img/MenuIcons/menubook.svg';
import Side from '../assets/img/MenuIcons/ricebowl.svg';
import drink from '../assets/img/MenuIcons/soda.svg';
import dessert from '../assets/img/MenuIcons/dessert.svg';




const MenuEntrees = [
    {
        index:'E01',
        itemName:'Brazilian Bibimbap Bowl',
        unitPrice:13.00,
        description:`This Bowl Of Latin Seoul Is A Fan Fave That Contains A Selection Of Hearty Latin-Korean Flavors. In Order To Enjoy This Dish Properly, You Can Put The Lid On The Bowl And Shake It Around To Fuse The Flavors And Enjoy!
        Each Bowl Contains: Sticky Chimichurri Rice, Black Beans, Lettuce, Bulgogi Beef Strips, Mango Pico, Kimchi, Korean Cucumber Salad, Diced Sweet Potatoes, A Sprinkle Of Green Onions, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes.`,
        addOn:'Add A Sunny Side Up Egg On Top For An Extra',
        addOnPrice:1.00    
    },
  
    {
        index:'E02',
        itemName:'Bulgogi Bowl',
        unitPrice:12.00,
        description:`This Bowl Is Korean Comfort Food. It Contains Sticky Rice, Bulgogi Ground Beef, Korean Radish, Sprouts, Guacamole, Kimchi, Cucumber Salad, Korean Carrots, Mildly Spicy Mayo, A Sprinkle Of Green Onions, And A Dusting Of Mild Gochugaru Flakes. Don’t Forget To Shake And Enjoy!`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E03',
        itemName:'Japchae (Chop-Chae) Noodle Bowl',
        unitPrice:12.00,
        description:`Japchae, Sweet Potato Noodles (A.K.A. Glass Noodles) Stir Fried With Vegetables And Chicken or 6 Korean Meatballs, Is One Of Korea’s Best-Loved Dishes. It Reheats Well And Is A Favorite For People Who Are Carefully Starting To Try Korean Food.Each Bowl Contains: Sweet Potato (Glass) Noodles Mixed With A Stir Fry Of Chicken, Onions, Peppers, Mushrooms, Broccoli, And Carrots. The Sauce Has A Familiar Asian Flavor With A Touch Of South American Flare.`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E04',
        itemName:'Mandu – Korean Fried Dumplings (8)',
        unitPrice:11.00,
        description:`Our Dumplings Are Made With Chicken, Veggies, And A Whole Lot Of Love. We Serve Them With Our Special Latin Seoul Dipping Sauce And A Side Of Kimchi And Korean Slaw.`,
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E05',
        itemName:'Latin Seoul Tacos (3)',
        unitPrice:11.00,
        description:'Our 3 Latin Seoul Tacos Are Made With Corn Or Flour Tortillas, Sticky Chimichurri Rice, Bulgogi Beef Or Chicken, Queso Fresco, Korean Cole Slaw, Mango Pico, A Sprinkle Of Green Onions, Sprouts, Lime Wedge On The Side, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes. These Tacos Are Bursting With Flavor And Pair Nicely With Our Freshly Cooked And Perfectly Seasoned Black Beans And Kimchi!',
        addOn:'na',
        addOnPrice:'na'    
    },
    {
        index:'E06',
        itemName:'Kids Meal',
        unitPrice:9.00,
        description:`4 Korean Meatballs with black Beans and Sticky Chimi Rice. Yummy and Simple.`,
        addOn:'na',
        addOnPrice:'na'    
    },
    
]


const MenuSides = [
    {
        index:'S01',
        itemName:'Kimchi',
        unitPrice:2.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },

    {
        index:'S02',
        itemName:'Korean Slaw',
        unitPrice:2.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },

    {
        index:'S03',
        itemName:'Black Beans',
        unitPrice:2.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },

    {
        index:'S04',
        itemName:'Small Guacamole',
        unitPrice:2.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },
    {
        index:'S05',
        itemName:'Korean Cucumber Salad',
        unitPrice:2.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },
  
    
    
]


const MenuDrinks = [
    {
        index:'D01',
        itemName:'Coke',
        unitPrice: 1.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },

    {
        index:'D02',
        itemName:'Dr. Pepper',
        unitPrice:1.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },

    {
        index:'D03',
        itemName:'Sprite',
        unitPrice:1.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'  
    },

    {
        index:'D04',
        itemName:'Diet Coke',
        unitPrice:1.50,
        description:'',
        addOn:'na',
        addOnPrice:"'na"  
    },
    {
        index:'D05',
        itemName:'Bottled Water',
        unitPrice:1.50,
        description:'',
        addOn:'na',
        addOnPrice:'na'   
    },
  
    
    
]


const MenuDesserts = [
    {
        index:'DS01',
        itemName:'Latin American Cream Puffs (3)',
        unitPrice:2.50,
        description:'Drizzled with caramel and fudge. Lightly sprinkled with cinnamon.',
        addOn:'na',
        addOnPrice:'na'   
    }  
    
]


const MenuSpecials = [
    {
        index:'SP01',
        itemName:'Kimchi Fries',
        unitPrice:10.00,
        description:'French fries topped with thinly shredded cheese, bulgogi meat sauteed with kimchi, topped with spicy mayo, and sprinkled with green onions and a dusting of G-Flakes.',
        addOn:'na',
        addOnPrice:'na'   
    },   
    
    {
        index:'SP02',
        itemName:'Bulgogi Burger w/diced sweet potato fries',
        unitPrice:12.00,
        description:'Great for a light lunch. Our Gogi Roll is an 8-piece sushi roll made with chimi rice, black beans, carrots, cucumber, avocado, and beef. Topped with Bulgogi beef, spicy mayo, green onions, and G-Flakes.',
        addOn:'na',
        addOnPrice:'na'   
    },   

    {
        index:'SP03',
        itemName:'Gogi-Sushi Roll (1)',
        unitPrice:9.00,
        description:'King’s Hawaiian Bun, Bulgogi patty, pepper jack cheese, spicy mayo, Korean slaw, avocado, lettuce and tomato Sweet potato fries.',
        addOn:'na',
        addOnPrice:'na'   
    },   
    
]


const MenuCartData = [
    {
        item: 'Beef Bugogi',
        quantity: '1',
        total:'13.00'
    }
]

const MenuCategories = [
    {
        name:"Main Entree's",
        img:`${ME}`,
        onclick: MenuEntrees
    },
    {
        name: "Specials",
        img:`${SP}`,
        onclick: MenuSpecials
    }, 
    {
       name: "Sides",
       img:`${Side}`,
       onclick: MenuSides
    },
    {
        name:"Drink's",
        img:`${drink}`,
        onclick: MenuDrinks
        
    },
    {
        name:"Desserts",
        img:`${dessert}`,
        onclick: MenuDesserts
        
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