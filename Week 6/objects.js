const person = {
  firstName: "John",
  lastName: "Doe",
  height: "6'2",
  weight: 200,
  hobbies: ["eat", "sleep", "code"],
  beverages: { morning: "coffee", evening: "Tea" },
  greeting: function () {
    console.log(`Hello World I'm ${this.firstName}` + `${this.lastName}`);
  },
  myMethod: function () {
    console.log(this);
  },
};

console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.beverages);
console.log(person.beverages.evening);
person.greeting();
person.myMethod(); // Logs myObject

console.log(this === window); // true in a browser environment
function myFunction() {
  console.log(this);
}

function MyConstructor() {
  this.myProperty = "value";
  console.log(this);
}

let instance = new MyConstructor(); // Logs the newly created instance

myFunction(); // Logs the global object (or undefined in strict mode)

console.log(this);

//This is ES5 syntax
function Dog(name, breed, age) {
  this.name = name; // Property: Name of the dog
  this.breed = breed; // Property: Breed of the dog
  this.age = age; // Property: Age of the dog

  // Method: Function to make the dog bark
  this.bark = function () {
    console.log(`${this.name} says Woof Woof!`);
  };
}

let myDog = new Dog("Buddy", "Golden Retriever", 3);
