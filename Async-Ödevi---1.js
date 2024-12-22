document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const userInfoDiv = document.getElementById("userInfo");
    const loadingDiv = document.getElementById("loading");
    const errorDiv = document.getElementById("error");
  
    userInfoDiv.classList.add("hidden");
    errorDiv.classList.add("hidden");
    loadingDiv.classList.remove("hidden");
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Kullanıcı bulunamadı veya API erişimi başarısız.");
      }
  
      const data = await response.json();
  
      document.getElementById("profileImage").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || "Ad yok";
      document.getElementById("bio").textContent = data.bio || "Biyografi yok";
      document.getElementById("followers").textContent = data.followers;
      document.getElementById("following").textContent = data.following;
      document.getElementById("repos").textContent = data.public_repos;
  
      // Son 5 repo'yu al ve göster
      const reposResponse = await fetch(data.repos_url);
      if (reposResponse.ok) {
        const repos = await reposResponse.json();
        const recentReposList = document.getElementById("recentRepos");
        recentReposList.innerHTML = "";
  
        repos.slice(0, 5).forEach((repo) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
          recentReposList.appendChild(listItem);
        });
      }
  
      loadingDiv.classList.add("hidden");
      userInfoDiv.classList.remove("hidden");
    } catch (error) {
      loadingDiv.classList.add("hidden");
      errorDiv.textContent = error.message;
      errorDiv.classList.remove("hidden");
    }
  });
  