// Short Circuiting

//const response = "Archi's Academy";

const response = "";
const isEmailVerified = true;

// let username;

// if (response) {
    // username = response;
// } else {
    // username = "guest";
//}

// const result = false || true;

// const result = true && true;

// const username = response || "guest";

const username = isEmailVerified && response || "guest";

console.log(username);
