let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

let theNumber2 = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let age = Number(prompt("Enter your  age"));
if (age < 16) {
  console.log("you  are  young to  work");
} else if (age < 70) {
  console.log("you  are  eligible  to  work  ");
} else {
  if (age >= 70 && age <= 100) {
    console.log("you  are  not  eligible  to  work");
  }
}
