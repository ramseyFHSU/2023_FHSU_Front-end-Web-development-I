let myName;
let myAge;

myName = "Ramsey";
myAge = 32;

// document.getElementById("para").innerHTML =
//   "Hello all my name is " + myName + "and my age is " + myAge;

document.getElementById(
  "para"
).innerHTML = `Hello all my name is ${myName} and my age is ${myAge}`;

console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.charCodeAt(2));
console.log(myName.concat(myAge));
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.slice(1, 2));

// Numbers
const myNum = 27;
const myFloat = 27.01;
const myString = "Two";

console.log(myFloat == myNum);
console.log(Number(myNum));
console.log(Number(true));
console.log(Number(false));

// arithmetic operations
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.pow(2, 4));
console.log(Math.min(2, 4, 6));
console.log(Math.max(2, 4, 6));
