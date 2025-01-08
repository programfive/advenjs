function organizeInventory(inventory) {
  const response = {};
  let sumQuantity = 0;
  let repeatName = '';
  inventory.forEach((invent) => (response[invent.category] = {}));
  for (let i = 0; i < inventory.length; i++) {
    let { name, category, quantity } = inventory[i];
    for (let j = i + 1; j < inventory.length; j++) {
      if (name === inventory[j].name && category === inventory[j].category) {
        sumQuantity = quantity + inventory[j].quantity;
        repeatName = inventory[j].name;
        repeatCategory = inventory[j].category;
      }
    }
    if (repeatName === name) {
      response[category][name] = sumQuantity;
    } else {
      response[category][name] = quantity;
    }
  }
  return response;
}
const inventory = [
  {
    name: 'doll',
    quantity: 5,
    category: 'toys',
  },
  {
    name: 'car',
    quantity: 3,
    category: 'toys',
  },
  {
    name: 'ball',
    quantity: 2,
    category: 'sports',
  },
  {
    name: 'car',
    quantity: 2,
    category: 'toys',
  },
  {
    name: 'racket',
    quantity: 4,
    category: 'sports',
  },
];

organizeInventory(inventory);

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  {
    name: 'book',
    quantity: 10,
    category: 'education',
  },
  {
    name: 'book',
    quantity: 5,
    category: 'education',
  },
  {
    name: 'paint',
    quantity: 3,
    category: 'art',
  },
];

// organizeInventory(inventory2);

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
