// const homeElement = document.getElementById("home");
// homeElement.style.backgroundColor = "lightblue";

const homeElement = document.querySelectorAll("a");

homeElement.forEach((element) => {
    console.log(element.innerText);
    if(element.innerText === "Ana Sayfa") {
        element.style.color ="red";
        element.innerText = "Home";
    }
})

// console.log(homeElement);