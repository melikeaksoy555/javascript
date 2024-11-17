// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     console.log("tamamlandı");
// });

// console.log("tamamlandı");

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  getRestaurants(position, (restaurants) => {
    console.log(restaurants);
    console.log("tamamlandı");
  });
});
