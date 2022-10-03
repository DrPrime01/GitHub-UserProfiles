let searchParam = "";
let githubAPI = "https://api.github.com/users/";

let searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("form");
const avatar = document.getElementById("avatar");
const userLogin = document.getElementById("user-login");
const userName = document.getElementById("user-name");
const bio = document.getElementById("bio");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //call the getUserData function
    getUserData();
    //reset all fields
    searchInput.value = "";
    searchParam = "";
    githubAPI = "https://api.github.com/users/";
});

function getUserData() {
    // If searchInput is not empty, set searchParam to searchInput's value, else return searchParam
    searchInput ? searchParam = searchInput.value: searchParam;
    // If searchParam is not empty, concatenate githubAPI with searchParam, else return githubAPI
    searchParam ? githubAPI = `${githubAPI}${searchParam}` : githubAPI;
   // fetch the user details using github API
    fetch(githubAPI)
            .then(response => response.json())
            .then(data => {
                avatar.setAttribute("src", data.avatar_url);
                userLogin.innerText = `Login: ${data.login}`;
                userName.innerText = `Name: ${data.name}`;
                data.bio !== null ? bio.innerText = `Bio: ${data.bio}` : bio.innerText = "Bio: No bio available";
                console.log(data)
            })
            .catch(err => console.log(err))
}