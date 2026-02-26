const btn = document.getElementById("btn");
const userDiv = document.getElementById("user");

btn.addEventListener("click", getUser);

async function getUser() {
  userDiv.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const user = data.results[0];

    userDiv.innerHTML = `
      <img src="${user.picture.large}" alt="User Image" />
      <h3>${user.name.first} ${user.name.last}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
  } catch (error) {
    userDiv.innerHTML = "<p>Failed to load user. Try again.</p>";
    console.error(error);
  }
}