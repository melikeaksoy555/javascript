// const newPost = document.createElement('div');
// const mainElement = document.querySelector("#main");

// newPost.className = "top-post";

// newPost.innerHTML = "<strong>Bu yeni bir post</strong>";

// // mainElement.appendChild(newPost);

// mainElement.prepend(newPost);

// const firstPost = document.querySelector("#firstPost");

// const btn = document.createElement("button");
// btn.innerText = "Post'u göster";
// document.body.prepend(btn);

// btn.addEventListener("click", () => {
//     firstPost.classList.toggle("invisible");
// });

const firstPost = document.querySelector("#firstPost");
const input = document.querySelector("#myInput");

// input.addEventListener("keyup", (event) => {
    input.addEventListener("change", (event) => {
    // console.log(event.target.value);
    generatenewPostTitle(event.target.value);
});

firstPost.addEventListener("click", (event) => {
    console.log(event.target);
})

function generatenewPostTitle (title) {
    const newPostTitle = document.createElement("h2");
    newPostTitle.textContent = title;
    document.body.prepend(newPostTitle);
}
