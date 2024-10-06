const restaurants = [
    {name: "Cap City Diner" , kmAway: 2.2 },
    {name: "Chop Shop" , kmAway: 4.1 },
    {name: "Northstar Cafe" , kmAway: 0.9 },
    {name: "City Tavern" , kmAway: 0.5 },
    {name: "Shake Shack" , kmAway: 5.3 },
];

// const cRestaurants = restaurants.filter((restaurant) => {
//     return restaurant.name.startsWith("C");
// });

// const cRestaurants = restaurants.filter((restaurant) =>
//     restaurant.name.startsWith("C")
// );

// const cRestaurants = restaurants.filter((restaurant) =>
//     restaurant.kmAway >= 2.0 && restaurant.kmAway <= 5.0
// );

const cRestaurants = restaurants.find((restaurant) =>
    restaurant.name.toLocaleLowerCase().includes("north")
);

console.log(cRestaurants);