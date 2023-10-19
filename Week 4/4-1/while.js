// While Loop

let rabbitsPulled = 0;

while (rabbitsPulled < 5) {
  rabbitsPulled++;
  console.log(
    `Magic trick ${rabbitsPulled}: Pulled a rabbit out of the hat! 🎩🐇`
  );
}

console.log("The magician has finished his performance!");

// Assignment
// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 0; // Initializing user guess

// Use the built-in prompt function to take input from the user
userGuess = parseInt(prompt("Guess a number between 1 and 10!"));

// Loop until the user's guess matches the random number
while (userGuess !== randomNumber) {
  userGuess = parseInt(
    prompt("Incorrect! Try again. Guess a number between 1 and 10:")
  );
}

// Once out of the loop, it means the user guessed correctly
alert("Congratulations! You guessed the correct number.");
