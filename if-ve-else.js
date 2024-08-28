// const myBoolean = true;

// if(myBoolean){
//console.log("merhaba dünya");
//}

//const prefersDarkMode = true;
// const prefersSolarizedMode = true;

// if (prefersDarkMode) {
// console.log("Dark mode etkinleştirildi.");
// document.body.style.background = "black";
// } else if (prefersSolarizedMode){
// console.log("Solarized mode etkinleştirildi.");
// document.body.style.background = "palegoldenrod";
// } else {
// console.log("Light mode etkinleştirildi.");
// document.body.style.background = "white";
// }

// const colorMode = "dark";

// const colorMode = "solarized";

// const colorMode = "alakasız bişi";

// if (colorMode === "dark") {
  // console.log("Dark mode etkinleştirildi.");
  // document.body.style.background = "black";
// } else if (colorMode === "solarized") {
  // console.log("Solarized mode etkinleştirildi.");
  // document.body.style.background = "palegoldenrod";
// } else {
  // console.log("Light mode etkinleştirildi.");
  // document.body.style.background = "white";
// }

const colorMode = "dark";

switch (colorMode) {
    case "solarized":
        console.log("Solarized mode etkinleştirildi");
        document.body.style.background = "palegoldenrod";
        break;
    case "dark":
        console.log("Dark mode etkinleştirildi");
        document.body.style.background = "black";
        break;
    default:
        console.log("Light mode etkinleştirildi");
        document.body.style.background ="white";
}

