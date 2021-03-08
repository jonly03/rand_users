document.querySelector("#clk").addEventListener("click", handleClick);

function handleClick() {
  const URL = "https://random-data-api.com/api/users/random_user?size=10";

  //   fetch(URL)
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (data) {
  //       displayData(data);
  //     });

  axios.get(URL).then(function (res) {
    console.log(res.data);
  });
}

function isValidURL(url) {}

function displayData(users) {
  // Display username, avatar, employment title
  users.map(function (user) {
    const {
      username,
      avatar,
      employment: { title },
    } = user;

    console.log(avatar);

    const newUser = document.createElement("div");
    newUser.innerHTML = `
        <p>${username}</p>
        <img src="${avatar}"/>
        <p>${title}</p>`;

    document.querySelector("#app").appendChild(newUser);
  });
}
