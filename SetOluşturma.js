const numbers = new Set ([1,1,3]);

// console.log(numbers.size);

// console.log(numbers);

const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff",

];
// const uniqueDishes = [...new Set(customerDishes), "French Fries"];
const uniqueDishes = [new Set(customerDishes), "French Fries"];

console.log(uniqueDishes);