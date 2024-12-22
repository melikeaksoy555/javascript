// async function getPost(id) {
// const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// // console.log(response.json());
// const data = await response.json();
// console.log(data);
// }

// getPost(5);

// const myPost = getPost();

// console.log(myPost);

// myPost
// .then((data) => console.log(data));

// const getPost2= async () => {

// }

// async function runAsync() {
//     return await Promise.reject(Error("Hata oluştu"));
// }

// runAsync().then((data) => console.log(data)).catch((err) => console.error(err));

//   try {
//     await Promise.reject(Error("Hata oluştu"));
//   } catch (error) {
//     console.error(error);
//   }
// }

// runAsync();


// https://api.github.com/users/${kullanıcıAdı}


const getGithubUser = async (username) => {
    const userContainer = document.createElement("div");
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        userContainer.innerHTML = `
        <div class="card">
        <h2>${data.name}</h2>
        <img style="display: block" src="${data.avatar_url}" />
        <a target="_blank"href="${data.html_url}">Github Linki</a>
        <p>${data.bio}</p>
        <p>${data.location}</p>
        </div>
        `

        document.body.appendChild(userContainer);
        // console.log(data)
    } catch(error) {
        console.error(error);
    }
}

getGithubUser("alperenustun");
