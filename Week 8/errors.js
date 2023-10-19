variable = "Ramsey";
console.log(variable);

// Runtime Errors
const users = fetch("https://jsonplaceholder.typicode.com/users");

// Syntax Errors
eval('alert("Hello)'); // Missing closing quote

// ReferenceError
console.log(undeclaredVariable); // Variable is not declared

// Type Errors
null.myFunction(); // Trying to access a property on a null value

// RangeError
new Array(-1); // Array length must be a positive number or zero

// Logical Errors
function calculateAverage(sum, count) {
  return (sum / count) * 2; // Incorrect formula, multiplying by 2 is a logical error
}

const average = calculateAverage(15, 3);

function myFunction() {
  const j = 70;
  try {
    allert("The value of j is : " + j);
  } catch (error) {
    alert("Error: " + error.message);
  }
}
console.log(average);

function myFunction() {
  const j = 70;
  try {
    alert("The value of j is : " + j);
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    alert("Finally: Finally gets executed");
  }
}

function toUpperCase(string) {
  if (typeof string !== string) {
    throw TypeError("Wrong type given, expected a string");
  }
  return string.toUpperCase();
}
toUpperCase(42);

throw 23;
throw "String";

const myError = () => {
  try {
    const myName = "Ramsey";
    myName = "Sam";
  } catch (error) {
    console.log(error);
    console.error(error);
    console.message(error);
    console.table(error);
    console.name(error);
    console.warn(error);
    console.stack(error);
  }
};

myError();
console.log(2 + 3);

function customError(message) {
  this.message = message;
  this.name = "Custom Error";
  this.stack = `${this.name} ${this.message}`;
}

const myError2 = () => {
  try {
    throw new customError("this is a custom error");
  } catch (error) {
    console.log(error);
  }
};

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

throw new CustomError("This is a custom error");


function calculateArea(radius)
  let area = 3.14 * radious * radious;
  consol.log('The area of the circle is: ' + area);
  return area;
}

calculateAre(5);


function findLargestElement(array) {
    let largest = 0;
    for(let i = 1; i < array.lenght; i++) {
      if(array[i] > largest) {
        largest == array[i];
      }
    }
    console.log('Largest element is: ' largest);
    return largest;
  }
  
  findLargestElement([2, 3, 10, 6, 4, 8, 1]);
  
