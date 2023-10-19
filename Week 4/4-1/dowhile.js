// do while

// let cookiesInJar = 3; // Let's start with 3 cookies in the jar

// do {
//   console.log("Opened the jar and took a cookie! 🍪");
//   cookiesInJar--;
// } while (cookiesInJar > 0);

// console.log("Oh no! The cookie jar is empty now!");

let password;
let confirmPassword;

do {
  password = prompt("Please set your password:");
  confirmPassword = prompt(
    "Please confirm your password by entering it again:"
  );

  if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again.");
  }
} while (password !== confirmPassword);

alert("Password set successfully!");
