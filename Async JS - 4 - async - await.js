
async function getPost(id) {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// console.log(response.json());
const data = await response.json();
console.log(data);
}

getPost(5);

// const myPost = getPost();

// console.log(myPost);

// myPost
// .then((data) => console.log(data)); 

// const getPost2= async () => {

// }