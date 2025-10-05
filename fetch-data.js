// Step 1: Define an asynchronous function to fetch and display data
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Step 3: Select the container where data will be displayed
  const dataContainer = document.getElementById("api-data");

  try {
    // Step 4: Fetch data from the API
    const response = await fetch(apiUrl);

    // Convert response to JSON
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = "";

    // Step 6: Create a <ul> to hold user names
    const userList = document.createElement("ul");

    // Step 7: Loop through users and display their names
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 9: Handle errors
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Step 10: Run fetchUserData when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
