//Var, (Let, Const - ES6 specification in 2015 )

/* Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
/variables, classes, or imports to the top of their scope, prior to execution of the code. */

var libraryName = "Hays Library";

function checkBookAvailability() {
  console.log("Welcome to the ", libraryName);

  if (true) {
    var bookTitle = "Harry Potter"; //Function scoped
  }

  console.log("Checking availability of: ", bookTitle);

  libraryName = "Wichita Library";
  console.log(libraryName);
  // Hoisting of 'var'
  console.log("Author: ", author);
  var author = "Sam";
  console.log("Author: ", author);
}

checkBookAvailability();
