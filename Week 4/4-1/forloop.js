// For Loop

let numberOfAssignments = 5;

for (let i = 1; i <= numberOfAssignments; i++) {
  console.log(`Handed back assignment number ${i} to a student. 📝`);
}

console.log("All assignments have been returned!");

// Assignment
// Prompt the user for a number
let number = parseInt(
  prompt("Enter a number to generate its multiplication table:")
);

// Display a header for clarity
console.log(`Multiplication Table for ${number}:\n`);

// Use a for loop to display the multiplication table from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
