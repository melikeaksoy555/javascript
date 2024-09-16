// const colorPalette = {
//     blueColor: "#00f",
//     orangeColor: "f60",
//     //sayHi: function () {
//     sayHi: () => {
//         console.log("Hi");
//     },
//     isOpen: true,
//     countColors: 2,

// }

// console.log(colorPalette.countColors);

//primitive types
//undefined, null, boolean, number, string, symbol

//non-primitive types
//object {}

//primitive!lerin hepsi değer ile geçer.
// const myNum = 42;
// const secondNum = 42;

// console.log(myNum ===secondNum);

// //object type'şarda reference ile geçer
// const myObj = {
//     name: "test"
// };
// const secondObj = {
//     name: "test"
// };

// //console.log(myObj === secondObj);
// console.log(myObj.name === secondObj.name);

// const myNum = 42;
// const secondNum = 42;

// // const myObj = {};

// // const secondObj = myObj;

// // secondObj.a = 1;
// // console.log(myObj);
// // console.log(secondObj);

// const myObj = 5;

// let secondObj = myObj;

// secondObj = 6;

// console.log(myObj);
// console.log(secondObj);

// const color = "black";
// const hexCode = "#000";

// const colors = {
//   "blue color": "#f00",
//   orange: "#f60",
//   [color]: hexCode,
// };

// colors.red = "#foo";
// colors.red = "#f00";

// //console.log(colors);
// //console.log(colors["blue color"]);

// // aşağıdaki fonskiyonda değer gelmedi. HATA NEDİR?
// function getColor(key) {
//   return colors[key];
// }
// getColor("orange");

// const user = {
//     firstName: "Alperen",
//     username: "alperenustunn",
//     email: "alperen@archisacademy.com",
//     details: {
//         title: "Developer"
//     }
// }

// //Object Destructuring

// // const {firstName, email, details: {title} } = user;

// // function displayUser(){
//     function displayUser({firstName, email, details: {title} }){
//     //console.log(`User: ${user.firstName} - Email: ${user.email} - Title: ${user.details.title}`);
//     console.log(`User: ${firstName} - Email: ${email} - Title: ${title}`);
// }

// // displayUser();
// displayUser(user);

// const user = {
//     name: "",
//     username: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
// }

// const newUser = {
//     username: "alperenarchis",
//     email: "alperen@archisacademy.com",
//     password: "12345678",
// }

// const createdUser = { ...user, ...newUser, isVerified: true };

// //Object.assign(user, newUser)
// //yeni object oluşturma {}
// //console.log(Object.assign({},user, newUser))
// //console.log(Object.assign(user, newUser))
// //console.log(newUser);
// //console.log(user);

// console.log(createdUser);

// objectler'de key-value çiftlerinin sırasının önemi yok.

const nums = {
  1: 1,
  true: true,
};
console.log(nums);
//console.log(Object.keys(nums));

// Maplerde key-value çiftlerinin sırası önemlidir.

const myMap1 = new Map([
  [1, 1],
  //[true, true],
  [true, "stringDegeri"],
]);

//console.log(myMap1);
//console.log(myMap1.keys());
//myMap1.set("key", "value");
myMap1.set("amount", 10);
//console.log(myMap1);

myMap1.forEach((key, value) => {
  console.log(key, value);
});

console.log(myMap1.size);

console.log(myMap1.get("amount"));
console.log(myMap1.get(1));
console.log(myMap1.get(true));
