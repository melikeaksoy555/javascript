// callback -> promise -> async/await

// promise'in durumları
// pending
// fulfilled
// rejected

// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//     // resolve("Tamamlandı");
//     // reject("Tamamlandı");
//     reject(new Error("bir hata oluştu"));
// }, 2000);
// });
// // console.log(promise);
// // promise.then(() => console.log("başarılı")).catch(() => console.log("hata"));
// // promise.then((value) => console.log(value)).catch((err) => console.log(err));
// promise
// .then((value) => console.log(value))
// .catch((err) => console.error(err))
// .finally(() => console.log("işlem tamamlandı"));

// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
// });
// console.log("tamamlandı");

const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

promise
  .then((position) => console.log(position))
  .catch((err) => console.error(err))
  .finally(() => console.log("işlem tamamlandı"));
