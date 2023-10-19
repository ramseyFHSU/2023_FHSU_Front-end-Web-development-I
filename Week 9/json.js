const myObj = {
  name: "ramsey",
  email: "ramsey@gmail.com",
  greeting() {
    console.log(`Hello class this is ${this.name}`);
  },
};

myObj.greeting();
console.log(typeof myObj);

const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);

const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);

// Function to fetch user data
function fetchUserData(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      // Check if the response is okay, then parse JSON
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      displayUserData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to display user data on the page
function displayUserData(user) {
  const userDetails = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
  `;

  document.getElementById("user").innerHTML = userDetails;
}

// Fetch and display user data for a specific user (e.g., user with ID 1)
fetchUserData(2);
