const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];

const total = menuItems.reduce((accumulator, menuItem) => {
console.log(`àccumulator: ${accumulator}, menu item price: ${menuItem.price}`)
return accumulator + menuItem.price;
}, 0);

// const total = menuItems.reduce(callbackFunc, 0);

// const callbackFunc = (accumulator, menuItem) => {
//   console.log(
//     `àccumulator: ${accumulator}, menu item price: ${menuItem.price}`
//   );
//   return accumulator + menuItem.price;
// };

reduce (a,b)

// a callback func

(a,b)

console.log(total);
