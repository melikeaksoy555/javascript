//function handleLikePost() {
//let likeCount = 0;

//return function addLike() {
//likeCount += 1;
//return likeCount;
// console.log(likeCount);
//};
//}

//const like = handleLikePost();

//console.log(like());
//console.log(like());
//console.log(like());

//handleLikePost();
//handleLikePost();
// handleLikePost();
// handleLikePost();

// likeCount = 0;

function handleLikePost() {
  let likeCount = 0;

  return function addLike(step) {
    likeCount += step;
    return likeCount;
  };
}

const like1 = handleLikePost();

console.log(like1(2));
console.log(like1(4));
console.log(like1(6));

// javascript içerisinde "closures"
