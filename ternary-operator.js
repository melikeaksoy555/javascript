// const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
    // cartItemCount = 1;
// } else {
    // cartItemCount = 0;
    // console.log("Lütfen giriş yapınız!");
// }

//ternary operator

// isAuthenticated ? (cartItemCount = 1) : (cartItemCount = 0);

// console.log(cartItemCount);

// 
// const cartItemCount = isAuthenticated ? 1 : 0;

// const cartItemCount = isAuthenticated 
// ? 1 
// : console.log("Lütfen giriş yapınız!");

// console.log(cartItemCount);

const age = 17;
// let permissionMessage;

// if(age < 18){
    //permissionMessage = "18 yaşından küçüklere izin verilmemektedir!";
//} else {
//  permissionMessage = "Hoşgeldiniz!";
//}

const permissionMessage = age < 18 ? "Durun!" : "Hoşgeldiniz";

console.log(permissionMessage);