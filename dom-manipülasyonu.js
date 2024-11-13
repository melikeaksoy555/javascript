// const newPost = document.createElement('div');
// const mainElement = document.querySelector("#main");

// newPost.className = "top-post";

// newPost.innerHTML = "<strong>Bu yeni bir post</strong>";

// // mainElement.appendChild(newPost);

// mainElement.prepend(newPost);

const firstPost = document.querySelector("#firstPost");

const btn = document.createElement("button");
btn.innerText = "Post'u göster";
document.body.prepend(btn);

btn.addEventListener("click", () => {
    firstPost.classList.toggle("invisible");
});
