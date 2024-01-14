// Selecting the <h5> element and the button with the id "btn"
let isStatus = document.querySelector("h5");
let btn = document.querySelector("#btn");

// Initializing a flag to track the current status (0 for Stranger, 1 for Friend)
let flag = 0;

// Adding a click event listener to the button
btn.addEventListener("click", function () {
  // Checking the current status using the flag variable
  if (flag == 0) {
    // Updating the status to "Friend"
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";

    // Changing button text and color for "Remove Friend" state
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "crimson";

    // Updating the flag to indicate the new state
    flag = 1;
  } else {
    // Updating the status to "Stranger"
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "crimson";

    // Changing button text and color for "Add Friend" state
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "green";

    // Updating the flag to indicate the new state
    flag = 0;
  }
});
