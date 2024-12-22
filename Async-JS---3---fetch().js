// CRUD operations
// Create -> POST
// Read -> GET
// Update -> PUT/PATCH
// Delete -> DELETE

// JSON -> JavaScript Object Notation

// GET/ posts/1 -Id'si 1 olan postu getirir. 
// POST /posts - Yeni post oluşturur

const blogPost = {
    title: "Blog Yazısı Başlığı",
    body: "Blog Yazısı İçeriği",
    userId: 26,
}


// const postBilgisi = fetch("https://jsonplaceholder.typicode.com/posts/1")

// console.log(postBilgisi);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json;",
//     },
//     body: JSON.stringify(blogPost)
// })
// .then((response) => response.json())
// .then((data) => console.log(data));
    // console.log(response);

// fetch(endpoint, config)

fetch("https://jsonplaceholder.typicode.com/pots/1")
.then((response) => {
    if(!response.ok) {
        throw Error(`Bir problem oluştu ${response.status}`);
    }
}) 
.then((data) => console.log(data))
.catch((err) => console.error(err));
