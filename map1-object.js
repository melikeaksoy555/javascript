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

const user = {
    firstName: "Alperen",
    username: "alperenustunn",
    email: "alperen@archisacademy.com",
    details: {
        title: "Developer"
    }
}

//Object Destructuring

// const {firstName, email, details: {title} } = user;

// function displayUser(){
    function displayUser({firstName, email, details: {title} }){
    //console.log(`User: ${user.firstName} - Email: ${user.email} - Title: ${user.details.title}`);
    console.log(`User: ${firstName} - Email: ${email} - Title: ${title}`);
}

// displayUser();
displayUser(user);