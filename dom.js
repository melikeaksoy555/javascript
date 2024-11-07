const p = document.createElement('p');

p.innerText = 'Hello World';

// console.log(p.style);

p.style.backgroundColor = "red";

document.body.style.backgroundColor ="black";

p.addEventListener("click", () => {
    console.log("p'ye tıkladım");
});

document.body.appendChild(p);