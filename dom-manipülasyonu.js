const newPost = document.createElement('div');
const mainElement = document.querySelector("#main");

newPost.className = "top-post";

newPost.innerHTML = "<strong>Bu yeni bir post</strong>";

// mainElement.appendChild(newPost);

mainElement.prepend(newPost);
