const API_URL = "https://reqres.in/api/users";

async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    displayUsers(data.data);
  } catch (error) {
    console.error("Something went wrong:", error);

    document.getElementById("user-container").innerHTML =
      "Failed to load user data.";
  }
}


function displayUsers(users) {
  const userContainer = document.getElementById("user-container");

  userContainer.innerHTML = ""; 
  users.forEach((user) => {
    const userDiv = document.createElement("div");

    userDiv.classList.add("user");

    userDiv.innerHTML = `

            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" class="avatar">

            <h2>${user.first_name} ${user.last_name}</h2>

            <p>${user.email}</p>

        `;

    userContainer.appendChild(userDiv);
  });
}

document.getElementById("fetch-users").addEventListener("click", fetchUsers);
